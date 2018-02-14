import { createStore } from 'redux';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = (
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default createStore(() => {}, reduxDevtools);
