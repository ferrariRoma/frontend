import React from 'react';
import styled from '@emotion/styled';

const WelcomeTitleAtom = ({ children }: { children: string }) => {
  return <Title>{children}</Title>;
};

export default WelcomeTitleAtom;

const Title = styled.h1`
  color: #252222;
  font-size: 2rem;
`;
