import { fireEvent, render, screen } from '@testing-library/react';
import { userStub } from '../../../stubs';
import Welcome from '../../components/Welcome';

describe('Welcome', () => {
  let handleLoginBtn = jest.fn().mockResolvedValue(userStub());

  describe('유저가 로그인을 안했을 경우', () => {
    it('타이틀과 로그인 버튼을 렌더링 한다.', () => {
      const { container } = render(
        <Welcome>
          <Welcome.TypoAtom fontSize="2rem">EXTREME TODO</Welcome.TypoAtom>
          <Welcome.GoogleLoginAtom handleLoginBtn={handleLoginBtn} />
        </Welcome>
      );

      const googleImage = screen.getByRole('img');

      expect(container).toHaveTextContent('EXTREME TODO');
      expect(googleImage).toBeInTheDocument();
      expect(googleImage).toHaveAttribute('alt', 'google login button');
    });
  });

  describe('유저가 로그인 버튼을 누르면', () => {
    it('로그인 url로 리다이렉트를 해준다', () => {
      render(<Welcome.GoogleLoginAtom handleLoginBtn={handleLoginBtn} />);

      const googleImage = screen.getByAltText(/google login button/i);

      fireEvent.click(googleImage);
      expect(handleLoginBtn).toBeCalled();
    });
  });

  describe('유저가 로그인을 했을 경우', () => {
    it('로그아웃 버튼과 셋팅 버튼을 렌더링 한다.', () => {
      const { container } = render(
        <Welcome>
          <Welcome.TypoAtom fontSize="2rem">EXTREME TODO</Welcome.TypoAtom>
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
[x] context
  유저가 로그인을 안했을 경우
it
  타이틀, 로그인 이미지(버튼)을 띄워준다.
*/

/* TODO 로그인 로직 자체는 e2e테스트로 작성을 해야 한다.
[ ]context
  로그인 이미지를 누면 
it
  로그인 url로 넘어간다 or 갔다가 뭘 받아온다
[ ] context
  로그인 과정에서 에러가 발생한다면
it
  에러 메시지를 출력해준다.
*/

/* 
[ ] context
  유저가 로그인을 했을 경우
it
  타이틀, signout 버튼, setting 버튼 출력해주기
 
[ ] context
  signout 버튼을 누르면 
it
  signout로직이 작동된다.
 
[ ] context
  setting 버튼을 누르면 
it
  setting 모달창이 출력된다.
*/

/* 
[ ] context
  유저가 접속 시
it
  토큰을 탐지하고 로그인 이미지를 띄워줄지, 로그아웃/셋팅을 띄워줄지 결정한다. => 이건 custom Hook으로 뺄 거 같다.
*/
