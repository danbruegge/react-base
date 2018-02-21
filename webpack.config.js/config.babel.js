// @flow
import path from 'path';
import webpack from 'webpack';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (env: { production?: string }) => {
    const isProduction = !!env.production;
    const distribution = resolvePath('dist');

    return {
        devtool: getDevtool(isProduction),
        resolve: { extensions: ['.js', '.jsx'] },
        context: resolvePath('src'),
        entry: './index.jsx',
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|dist)/,
                    loader: 'eslint-loader',
                    options: {
                        failOnError: isProduction,
                        rules: getEslintRules(isProduction)
                    }
                },
                {
                    exclude: /(node_modules|dist)/,
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader'
                }
            ]
        },
        output: {
            filename: '[name].js',
            path: distribution,
            publicPath: '/'
        },
        plugins: [
            new webpack.DefinePlugin({
                IS_PRODUCTION: JSON.stringify(isProduction)
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new StyleLintPlugin({ files: ['**/*.js*'] }),
            htmlSinglePage(resolvePath('src/index.html'))
        ],
        devServer: {
            contentBase: distribution,
            host: '0.0.0.0',
            port: 9000,
            stats: 'minimal',
            historyApiFallback: true
        }
    };
};

const resolvePath = toResolve => path.resolve(__dirname, '../', toResolve);

const getDevtool = isProduction =>
    isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map';

const getEslintRules = isProduction => ({
    'no-console': isProduction ? [2, { allow: ['warn', 'error'] }] : 0
});

const htmlSinglePage = template =>
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template,
        hash: true
    });
