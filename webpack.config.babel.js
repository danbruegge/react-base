import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default (env) => {
    const isProduction = !!env.production;
    const distribution = resolvePath('dist/');
    const exclude = /(node_modules|dist|__tests__)/;

    const htmlSinglePage = new HtmlWebpackPlugin({
        filename: 'index.html',
        template: resolvePath('src/index.html'),
        hash: true,
    });

    const eslintRules = !isProduction ? {} : {
        'no-console': [2, { allow: ['warn', 'error'] }],
    };

    return {
        devtool: isProduction
            ? 'hidden-source-map'
            : 'cheap-module-eval-source-map',
        resolve: { extensions: ['.js', '.jsx'] },
        context: resolvePath('src'),
        entry: './index.js',
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude,
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                        failOnError: isProduction,
                        rules: eslintRules,
                    },
                },
                {
                    exclude,
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                },
            ],
        },
        output: {
            filename: '[name].js',
            path: distribution,
            publicPath: '/',
        },
        plugins: [
            new webpack.DefinePlugin({
                IS_PRODUCTION: JSON.stringify(isProduction),
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            htmlSinglePage,
        ],
        devServer: {
            contentBase: distribution,
            host: '0.0.0.0',
            port: 9000,
            stats: 'minimal',
            historyApiFallback: true,
        },
    };

    function resolvePath(toResolve) {
        return path.resolve(__dirname, toResolve);
    }
};
