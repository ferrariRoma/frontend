import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {Welcome} from '../../components/index';
import { mockLocalStorage } from '../../../fixture/mockLocalStorage';
import { usersApi } from '../../shared/apis';
import React from 'react';

jest.mock('../../shared/apis');

const mockWelcome = (func: jest.Mock<any, any>) => {
  mockLocalStorage(func);
  const { container } = render(<Welcome />);
  return container;
};

describe('Welcome', () => {
  describe('유저가 로그인을 안했을 경우', () => {
    let renderResult: HTMLElement;

    beforeEach(() => {
      renderResult = mockWelcome(jest.fn((key: string) => null));
    });

    it('타이틀과 로그인 버튼을 렌더링 하고', () => {
      expect(renderResult).toHaveTextContent('EXTREME TODO');
      expect(renderResult).toContainElement(
        screen.getByAltText('google login button')
      );
    });

    it('로그인 버튼을 눌렀을 때 login메소드를 작동시킨다.', () => {
      const googleImage = screen.getByRole('img');
      fireEvent.click(googleImage);
      expect(usersApi.login).toBeCalled();
    });
  });

  describe('유저가 로그인을 했을 경우', () => {
    let renderResult: HTMLElement;

    beforeEach(() => {
      renderResult = mockWelcome(
        jest.fn((key: string) => 'extremeTokemSample')
      );
    });

    it('로그아웃 버튼이 렌더링 되어야 하고,', () => {
      expect(renderResult).toContainElement(screen.getByText('logout'));
    });

    it('클릭하면 removeItem을 호출한다.', () => {
      const logoutBtn = screen.getByText('logout');
      fireEvent.click(logoutBtn);
      expect(localStorage.removeItem).toBeCalled();
    });

    it('셋팅 버튼이 렌더링 되어야 하고,', () => {
      expect(renderResult).toContainElement(screen.getByText('setting'));
    });

    it('클릭하면 셋팅 모달을 띄워준다.', async () => {
      const settingBtn = screen.getByText('setting');

      fireEvent.click(settingBtn);

      await waitFor(() => {
        const settingTitle = screen.getByText('설정');
        expect(settingTitle).toBeInTheDocument();
      });
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
[x] context
  유저가 로그인을 했을 경우
it
  타이틀, signout 버튼, setting 버튼 출력해주기
 
[x] context
  signout 버튼을 누르면 
it
  signout로직이 작동된다.
 
[x] context
  setting 버튼을 누르면 
it
  setting 모달창이 출력된다.
*/

/* 
[x] context
  유저가 접속 시
it
  토큰을 탐지하고 로그인 이미지를 띄워줄지, 로그아웃/셋팅을 띄워줄지 결정한다. => 이건 custom Hook으로 뺄 거 같다.
*/
