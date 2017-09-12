import React from 'react';
import { injectGlobal } from 'styled-components';

import HelloWorld from 'app/components/HelloWorld';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
    body {
        display: flex;
        justify-content: center;
    }
`;

const App = () => <HelloWorld />;

export default App;
