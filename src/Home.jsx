import { injectGlobal } from 'styled-components';

import HelloWorld from './HelloWorld';

injectGlobal`
    body {
        display: flex;
        justify-content: center;
    }
`;

export default HelloWorld;
