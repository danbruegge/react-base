import React from 'react';
import renderer from 'react-test-renderer';

import HelloWorld from './index';

describe('HelloWorld', () => {
    test('Should render component', () => {
        const component = <HelloWorld />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
