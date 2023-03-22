import { css } from '@emotion/react';
import styled from '@emotion/styled';

// DISCUSSION : margin이나 padding과 같은 부분은 외부의 주입으로 사용하는 것이 좋다고 하는데 이런 부분을 styles에 따로 빼는 것이 어떤지?
export interface IOutterStyle {
  margin?: number;
  padding?: number;
}

export const propStyle = (props: IOutterStyle) => css`
  margin: ${props.margin};
  padding: ${props.padding};
`;

const GoogleLoginAtom = (props: IOutterStyle) => {
  return (
    <ImgContainer {...props}>
      <img
        src="../../public/2x/btn_google_signin_dark_pressed_web@2x.png"
        alt="google login button"
      ></img>
    </ImgContainer>
  );
};

export default GoogleLoginAtom;

const ImgContainer = styled.div`
  ${propStyle};
`;
