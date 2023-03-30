import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import { click } from '@testing-library/user-event/dist/click';
import Welcome from '../../components/Welcome';

describe('Welcome', () => {
  describe('유저가 로그인을 안했을 경우', () => {
    it('타이틀과 로그인 버튼을 렌더링 한다.', () => {
      const { container } = render(
        <Welcome>
          <Welcome.WelcomTitleAtom>EXTREME TODO</Welcome.WelcomTitleAtom>
          <Welcome.GoogleLoginAtom />
        </Welcome>
      );

      const googleImage = screen.getByRole('img');

      expect(container).toHaveTextContent('EXTREME TODO');
      expect(googleImage).toBeInTheDocument();
      expect(googleImage).toHaveAttribute('alt', 'google login button');
    });
  });

  describe('유저가 로그인을 했을 경우', () => {
    it('로그아웃 버튼과 셋팅 버튼을 렌더링 한다.', () => {
      const { container } = render(
        <Welcome>
          <Welcome.WelcomTitleAtom>EXTREME TODO</Welcome.WelcomTitleAtom>
          <div>
            <button>logout</button>
            <button>settings</button>
          </div>
        </Welcome>
      );

      expect(container).toHaveTextContent('EXTREME TODO');
      // FireLogic 두 개 만들기
    });
  });
});

/* 
context
  유저가 로그인을 안했을 경우

it
  타이틀, 로그인 이미지(버튼)을 띄워준다.

context
  로그인 이미지를 누면 
it
  로그인 url로 넘어간다 or 갔다가 뭘 받아온다
*/

/* 
context
  유저가 로그인을 했을 경우

it
  타이틀, signout 버튼, setting 버튼 출력해주기

it
  signout 버튼을 누르면 signout로직이 작동된다.

it
  setting 버튼을 누르면 setting 모달창이 출력된다.
*/

/* 
context
  유저가 접속 시
it
  토큰을 탐지하고 로그인 이미지를 띄워줄지, 로그아웃/셋팅을 띄워줄지 결정한다. => 이건 custom Hook으로 뺄 거 같다.
*/
