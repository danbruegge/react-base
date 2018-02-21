// @flow
import webpackConfig from './config.babel';

jest.mock('path', () => {
    const joinPath = (...args) => args.splice(1).join('');

    return {
        resolve: joinPath,
        join: joinPath
    };
});

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
