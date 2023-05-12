import { render } from '@testing-library/react';
import { SettingModal } from '../../components';
import React from 'react';

describe('SettingModal', () => {
  it('셋팅창이 모달로 열립니다', () => {
    const { container } = render(<SettingModal />);
    // expect().
  });
});
