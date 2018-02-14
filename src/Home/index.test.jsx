import React from 'react';
import renderer from 'react-test-renderer';

import Home from 'Home';

describe('Home', () => {
    test('should render component', () => {
        const component = <Home />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
