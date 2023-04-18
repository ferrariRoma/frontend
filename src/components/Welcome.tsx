import styled from '@emotion/styled';
import { GoogleLoginAtom, TypoAtom } from '../atoms';
import { IChildProps } from '../shared/interfaces';

const Welcome = ({ children }: IChildProps) => {
  return <WelcomeContainer>{children}</WelcomeContainer>;
};

export default Welcome;

Welcome.TypoAtom = TypoAtom;
Welcome.GoogleLoginAtom = GoogleLoginAtom;

const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
