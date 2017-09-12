import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    background-color: SeaGreen;
    color: #fff;
    font-size: 40px;
    margin-bottom: 5px;
    padding-left: 5px;
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
