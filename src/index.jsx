// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Home from './Home';

const element = (
    <Provider store={store}>
        <Home />
    </Provider>
);
const container = document.getElementById('Root');

if (container === null) {
    throw new Error('no container element');
}

ReactDOM.render(element, container);
