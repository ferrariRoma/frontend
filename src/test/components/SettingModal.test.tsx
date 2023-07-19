import React from 'react';
import { SettingModal } from '../../components';

import { render } from '@testing-library/react';

describe('SettingModal', () => {
  beforeAll(() => {
    render(<SettingModal />);
  });
  describe('익스트림 모드 버튼을 클릭하면', () => {
    it('ON, OFF가 바뀐다.', () => {});
  });
});
// // 익스트림 모드 버튼
// const extremeOffBtn = screen.getByText('OFF');
// expect(extremeOffBtn).toBeInTheDocument();
// // 이 방법 말고 스위치 버튼 자체를 찾아서 그 안에 off 와 on이 있는지 확인하자
// // 지금 방법으로 하면 getByText('ON');을 또 해야 한다
// fireEvent.click(extremeOffBtn);
// expect(extremeOffBtn).not.toBeInTheDocument();

// // 데이터 초기화

// // 회원탈퇴
