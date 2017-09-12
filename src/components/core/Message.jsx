import React from 'react';
import styled from 'styled-components';

const Item = styled.p`
    color: DimGrey;
    font-size: 25px;
    margin: 0;
    padding: 5px;
`;

const Message = ({ children }) => <Item>{children}</Item>;

export default Message;
