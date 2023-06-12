import { render, waitFor } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { Records, IRecordsProps } from '../../molecules';
import { ThemeProvider } from '@emotion/react';
import { colorTheme } from '../../styles/theme';
import { ITotalFocusTime } from '../../shared/interfaces';

describe('Records', () => {
  function renderRecords(props: IRecordsProps) {
    return render(
      <ThemeProvider theme={colorTheme}>
        <Records {...props} />
      </ThemeProvider>,
    );
  }

  describe('모든 경우에', () => {
    it('타이틀 텍스트를 렌더한다', () => {
      const fetchRecords = jest.fn();
      const { getAllByText } = renderRecords({ isLogin: false, fetchRecords });
      expect(getAllByText(/나의 집중 기록/)).not.toBeNull();
    });
  });

  describe('로그인 하지 않은 경우', () => {
    it('LogInToUnlock을 렌더하고, 데이터를 페치하지 않는다.', () => {
      const fetchRecords = jest.fn();
      const { getByText } = renderRecords({ isLogin: false, fetchRecords });
      expect(
        getByText(/로그인하고 나의 집중 기록을 확인해보세요!/),
      ).not.toBeNull();
    });
  });

  describe('로그인한 경우', () => {
    it('기록 데이터를 페치하고 기록 데이터를 렌더한다.', async () => {
      const fetchRecords = jest.fn(
        jest.fn().mockResolvedValue({
          daily: 207,
          weekly: 3098,
          monthly: -20325,
        } as ITotalFocusTime),
      );
      const { getByText } = renderRecords({ fetchRecords, isLogin: false });

      await waitFor(() => {
        expect(fetchRecords).toBeCalled();
        expect(getByText(/207/)).not.toBeNull();
        expect(getByText(/3,098/)).not.toBeNull();
        expect(getByText(/-20,325/)).not.toBeNull();
      });
    });

    it('기록 데이터를 페치에 실패하고 알린다.', async () => {
      const fetchRecords = jest.fn(jest.fn().mockRejectedValue('failed'));
      const { getByText } = renderRecords({ fetchRecords, isLogin: true });
      await waitFor(() => {
        expect(fetchRecords).toBeCalled();
        expect(getByText(/데이터를 불러올 수 없습니다./)).not.toBeNull();
      });
    });
  });
});
