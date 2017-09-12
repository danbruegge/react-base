import React from 'react';
import styled from 'styled-components';

const Item = styled.p`
    color: DimGrey;
    font-size: 25px;
`;

const Message = ({ children }) => <Item>{children}</Item>;

export default Message;
