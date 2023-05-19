import styled from '@emotion/styled';
import { BtnAtom, GoogleLoginAtom, TypoAtom } from '../atoms';
import { usersApi } from '../shared/apis';
import { useCheckLogin } from '../hooks';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import SettingModal from './SettingModal';
import Modal from './Modal';

const Welcome = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useCheckLogin();

  const handleLoginBtn = async (): Promise<AxiosResponse<any, any>> => {
    return await usersApi.login();
  };

  const handleLogoutBtn = (): void => {
    return localStorage.removeItem('extreme-token');
  };

  const handleSetting = (): void => {
    setIsModal((prev) => !prev);
  };

  const handleClose = (): void => {
    setIsModal(false);
  };

  return (
    <>
      <WelcomeContainer>
        <TypoAtom fontSize="6.1875rem">EXTREME TODO</TypoAtom>
        {isLogin ? (
          <BtnContainer>
            <BtnAtom handler={handleLogoutBtn}>logout</BtnAtom>
            <BtnAtom handler={handleSetting}>setting</BtnAtom>
            {isModal &&
              createPortal(
                <Modal title="설정" handleClose={handleClose}>
                  <SettingModal />
                </Modal>,
                document.body,
              )}
          </BtnContainer>
        ) : (
          <GoogleLoginAtom onClick={handleLoginBtn} />
        )}
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 99.1717px;
  line-height: 119px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.05em;

  /* TitleColor */

  background: linear-gradient(
      114.81deg,
      #00c2ff 22.57%,
      rgba(0, 117, 255, 0) 65.81%
    ),
    #fa00ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
