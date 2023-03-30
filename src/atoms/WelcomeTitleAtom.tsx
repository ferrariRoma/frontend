import styled from '@emotion/styled';
import { IChildProps } from '../shared/interfaces';

const WelcomeTitleAtom = ({ children }: IChildProps) => {
  return <Title>{children}</Title>;
};

export default WelcomeTitleAtom;

const Title = styled.h1`
  color: #252222;
  font-size: 2rem;
`;
