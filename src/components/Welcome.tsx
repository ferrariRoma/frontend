import styled from '@emotion/styled';
import { BtnAtom, GoogleLoginAtom, TypoAtom } from '../atoms';
import { usersApi } from '../shared/apis';
import { useCheckLogin } from '../hooks';
import { AxiosResponse } from 'axios';

interface IWelcome {
  isLogin: string;
  setIsLogin: React.Dispatch<React.SetStateAction<string>>;
}

const Welcome = () => {
  const [isLogin, setIsLogin] = useCheckLogin();

  const handleLoginBtn = async (): Promise<AxiosResponse<any, any>> => {
    return await usersApi.login();
  };

  const handleLogoutBtn = (): void => {
    return localStorage.removeItem('extreme-token');
  };

  return (
    <>
      <WelcomeContainer>
        <TypoAtom fontSize="2rem">EXTREME TODO</TypoAtom>
        {isLogin ? (
          <BtnContainer>
            <BtnAtom handler={handleLogoutBtn}>logout</BtnAtom>
            <BtnAtom handler={() => {}}>setting</BtnAtom>
          </BtnContainer>
        ) : (
          <GoogleLoginAtom onClick={handleLoginBtn} />
        )}
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

// Welcome.TypoAtom = TypoAtom;
// Welcome.GoogleLoginAtom = GoogleLoginAtom;

const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
