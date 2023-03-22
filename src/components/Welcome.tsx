import styled from '@emotion/styled';
import { GoogleLoginAtom, WelcomeTitleAtom } from '../atoms';

const Welcome = ({ children }: { children: React.ReactElement[] }) => {
  return <WelcomeContainer>{children}</WelcomeContainer>;
};

export default Welcome;

Welcome.WelcomTitleAtom = WelcomeTitleAtom;
Welcome.GoogleLoginAtom = GoogleLoginAtom;

const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
