import React from 'react';
import styled from 'styled-components';

const AppHeader = styled.header`
    color: #fff;
    font-style: oblique;
    background-color: #254e70;
    padding: 2rem 0;
    `;
const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold; 
    margin: 1rem;
    
`;


function Header() {
  return (
    <AppHeader>
          <Title data-testid="header">Video Recommendation</Title>
    </AppHeader>
  )
}

export default Header