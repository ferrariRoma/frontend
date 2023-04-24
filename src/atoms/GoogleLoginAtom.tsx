import styled from '@emotion/styled';
import { ILayoutProps } from '../shared/interfaces';

interface ILoginAtomProps extends ILayoutProps {
  onClick: () => void;
}

const GoogleLoginAtom = ({ onClick, ...props }: ILoginAtomProps) => {
  return (
    <ImgContainer onClick={onClick} style={props}>
      <img
        src="btn_google_signin_dark_pressed_web@2x.png"
        alt="google login button"
      />
    </ImgContainer>
  );
};

export default GoogleLoginAtom;

const ImgContainer = styled.div``;
