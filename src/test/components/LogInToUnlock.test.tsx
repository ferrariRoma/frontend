import { fireEvent, render } from '@testing-library/react';
import { LogInToUnlock, ILogInToUnlockProps } from '../../components';

describe('Records', () => {
  function renderLogInToUnlock(props: ILogInToUnlockProps) {
    return render(
      <LogInToUnlock {...props}>
        <LogInToUnlock.LogInButton />
      </LogInToUnlock>,
    );
  }

  describe('subLabel 프랍을 넘길 경우', () => {
    it('subLabel 텍스트를 렌더링', () => {
      const { getByText } = renderLogInToUnlock({
        navigate: () => {},
        subLabel: 'subLabel',
      });
      expect(getByText(/subLabel/)).not.toBeNull();
    });
  });

  describe('label 프랍을 넘길 경우', () => {
    it('label 텍스트를 렌더링', () => {
      const { getByText } = renderLogInToUnlock({
        navigate: () => {},
        label: 'label',
      });
      expect(getByText(/label/)).not.toBeNull();
    });
  });

  describe('navigate 프랍만 넘길 경우', () => {
    it('기본 텍스트를 렌더링', () => {
      const { getByText } = renderLogInToUnlock({
        navigate: () => {},
      });
      expect(getByText(/로그인이 필요한 기능입니다./)).not.toBeNull();
      expect(getByText(/로그인하고 기능을 확인해보세요!/)).not.toBeNull();
    });

    it('navigate 버튼을 누르면 로직 실행', () => {
      const handleNavigate = jest.fn();
      const { getByText } = renderLogInToUnlock({
        navigate: handleNavigate,
      });
      fireEvent.click(getByText('로그인하기'));
      expect(handleNavigate).toBeCalled();
    });
  });
});
