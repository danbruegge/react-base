import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Home from 'Home';

test('Render Home correctly', () => {
    const component = <Home />;
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
});

