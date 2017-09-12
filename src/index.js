import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from 'app/components/core';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = (
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const store = createStore(() => {}, reduxDevtools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('Root'),
);
