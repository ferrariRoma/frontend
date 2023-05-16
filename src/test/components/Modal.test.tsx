import { render, screen } from '@testing-library/react';
import { Modal, SettingModal } from '../../components';
import { ThemeProvider } from '@emotion/react';
import { colorTheme } from '../../styles/theme';

describe('Modal', () => {
  describe('title과 SettingModal을 넘겨주면', () => {
    let renderResult: ReturnType<typeof render>;

    beforeEach(() => {
      const handleDone = () => {
        console.log('Done');
      };
      const handleClose = () => {
        console.log('Close');
      };
      renderResult = render(
        <ThemeProvider theme={colorTheme}>
          <Modal title="설정" handleDone={handleDone} handleClose={handleClose}>
            <SettingModal />
          </Modal>
        </ThemeProvider>,
      );
    });

    it('title과 기본 버튼을 렌더링 해줘야 합니다.', () => {
      const { container } = renderResult;
      expect(container).toContainElement(screen.getByText('설정'));
      expect(container).toContainElement(screen.getByText('close'));
    });

    it('셋팅 모달에 있는 버튼을 렌더링 해줘야 합니다.', () => {
      const { container } = renderResult;
      expect(container).toContainElement(screen.getByText('로그아웃'));
      expect(container).toContainElement(screen.getByText('데이터 초기화'));
      expect(container).toContainElement(screen.getByText('회원탈퇴'));
    });
  });
});
