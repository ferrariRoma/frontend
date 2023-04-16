import { renderHook } from '@testing-library/react';
import { userStub } from '../../../stubs';
import { useCheckLogin } from '../../hooks';

describe('useCheckLogin', () => {
  beforeEach(() => {
    const getToken = jest.fn(() => userStub().access);
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem(key: string) {
          if (key === 'extremeToken') return getToken();
          else return null;
        },
      },
      writable: true,
    });
  });

  describe('localstorage에 extremeToken이 있으면', () => {
    it('isLogin state를 true로 초기화 해준다', () => {
      const { result } = renderHook(() => useCheckLogin());
      const [isLogin] = result.current;

      expect(isLogin).toBe(true);
    });
  });

  describe('localstorage에 extremeToken이 없으면', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem(key: string) {
            return null;
          },
        },
      });
    });
    it('isLogin state를 false로 초기화 해준다', () => {
      const { result } = renderHook(() => useCheckLogin());
      const [isLogin] = result.current;

      expect(isLogin).toBe(false);
    });
  });
});
