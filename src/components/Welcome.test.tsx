import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Welcome', () => {
  render(
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

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

/* 
Welcome
*/

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
