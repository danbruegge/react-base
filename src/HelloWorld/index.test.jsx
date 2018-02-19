// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import HelloWorld from './index';

test('Render HelloWorld correctly', () => {
    const component = <HelloWorld />;
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
});
