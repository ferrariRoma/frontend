import styled from '@emotion/styled';
import { ILayoutProps } from '../shared/interfaces';

const GoogleLoginAtom = (props: ILayoutProps) => {
  return (
    <ImgContainer style={props}>
      <img
        src="../../public/2x/btn_google_signin_dark_pressed_web@2x.png"
        alt="google login button"
      ></img>
    </ImgContainer>
  );
};

export default GoogleLoginAtom;

const ImgContainer = styled.div``;
