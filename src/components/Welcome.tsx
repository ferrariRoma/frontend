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
        <TypoAtom fontSize="2rem">EXTREME TODO</TypoAtom>
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
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
