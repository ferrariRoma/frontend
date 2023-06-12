import styled from '@emotion/styled';
import { ILayoutProps } from '../shared/interfaces';

interface ILoginAtomProps extends ILayoutProps {
  onClick: () => void;
}

const GoogleLoginAtom = ({ onClick }: ILoginAtomProps) => {
  return (
    <ImgContainer onClick={onClick}>
      <img
        src="btn_google_signin_dark_pressed_web@2x.png"
        alt="google login button"
      />
    </ImgContainer>
  );
};

export default GoogleLoginAtom;

const ImgContainer = styled.div`
  width: 16.625rem;
  height: 4rem;
  display: flex;

  img {
    object-fit: 'cover';
    width: 100%;
    height: 100%;
  }
`;
