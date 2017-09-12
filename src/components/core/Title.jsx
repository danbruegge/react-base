import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: SeaGreen;
    font-size: 40px;
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
