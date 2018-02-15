import webpackConfig from './webpack.config.babel';

jest.mock('path', () => ({
    resolve: (...args) => args[1],
    join: (...args) => args[1],
}));

test('Should match snapshot for development', () => {
    const env = { development: 'development' };
    const actual = webpackConfig(env);

    expect(actual).toMatchSnapshot();
});

test('Should match snapshot for production', () => {
    const env = { production: 'production' };
    const actual = webpackConfig(env);

    expect(actual).toMatchSnapshot();
});
