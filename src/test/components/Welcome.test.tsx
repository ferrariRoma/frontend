import { render, screen } from '@testing-library/react';
import Welcome from '../../components/Welcome';

describe('Welcome', () => {
  describe('유저가 로그인을 안했을 경우', () => {
    it('타이틀을 렌더링을 한다.', () => {
      const { container } = render(
        <div>
          <h1>EXTREME TODO</h1>
          <div>
            <img
              src="../../public/2x/btn_google_signin_dark_pressed_web@2x.png"
              alt="google login button"
            ></img>
          </div>
        </div>
      );

      expect(container).toHaveTextContent('EXTREME TODO');
    });

    it('구글 로그인 ', () => {});
  });
});

// context
/* 
유저가 로그인을 안했을 경우
*/

// it
/* 
타이틀, 로그인 버튼을 띄워준다.
*/

// context
/* 
유저가 로그인을 했을 경우
*/

// it
/* 
타이틀, signout 버튼, setting 버튼 출력해주기
*/
