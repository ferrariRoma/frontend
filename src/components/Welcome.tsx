import styled from '@emotion/styled';
import { BtnAtom, GoogleLoginAtom, TypoAtom } from '../atoms';
import { usersApi } from '../shared/apis';
import { useCheckLogin } from '../hooks';

interface IWelcome {
  isLogin: string;
  setIsLogin: React.Dispatch<React.SetStateAction<string>>;
}

const Welcome = () => {
  const [isLogin, setIsLogin] = useCheckLogin();

  const handleLoginBtn = async () => {
    await usersApi.login();
  };

  return (
    <>
      <WelcomeContainer>
        <TypoAtom fontSize="2rem">EXTREME TODO</TypoAtom>
        {isLogin ? (
          <BtnContainer>
            <BtnAtom
              handler={() => {
                return;
              }}
            >
              logout
            </BtnAtom>
            <BtnAtom
              handler={() => {
                return;
              }}
            >
              setting
            </BtnAtom>
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

const BtnContainer = styled.div``;
