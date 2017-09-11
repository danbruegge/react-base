import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Title, Message } from 'app/components/core';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = (
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const store = createStore(() => {}, reduxDevtools);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Title>Hello World</Title>
            <Message>This is a hello world message.</Message>
        </div>
    </Provider>,
    document.getElementById('Root'),
);
