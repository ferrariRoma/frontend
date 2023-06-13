import { fireEvent, getByTestId, render, act } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { RankingAndRecords, IRankingAndRecordsProps } from '../../components';
import { ThemeProvider } from '@emotion/react';
import { designTheme } from '../../styles/theme';

describe('RankingAndRecords', () => {
  function renderRankingAndRecords(props: IRankingAndRecordsProps) {
    return render(
      <ThemeProvider theme={designTheme}>
        <RankingAndRecords {...props} />
      </ThemeProvider>,
    );
  }

  // TODO: 현재는 Records가 먼저 나오도록 되어있어 테스트에 무조건 실패한다. Ranking 완성 후에 Ranking이 먼저 출력되도록 변경
  describe('처음 페이지가 렌더링 될 때', () => {
    it('Ranking 출력', () => {
      const { getByTestId } = renderRankingAndRecords({ isLogin: true });

      act(() => {
        expect(getByTestId('ranking-component')).not.toBeNull();
      });
    });
  });

  describe('나의 집중 기록 버튼을 클릭했을 때', () => {
    it('Records 출력', () => {
      const { getByRole, getByTestId } = renderRankingAndRecords({
        isLogin: true,
      });
      const toggleButton = getByRole('button', {
        name: /나의 집중 기록/i,
      });

      act(() => {
        fireEvent.click(toggleButton);
        expect(getByTestId('records-component')).not.toBeNull();
      });
    });
  });
});
