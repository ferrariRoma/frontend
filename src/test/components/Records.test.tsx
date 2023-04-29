import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { Records, IRecordsProps } from '../../components';

describe('Records', () => {
  function renderRecords({ props }: IRecordsProps) {
    return render(
      <Records {...props}>
        <Records.LogInToUnlock
          label="로그인하고 나의 집중기록을 확인해보세요!"
          navigate={jest.fn()}
        />
      </Records>,
    );
  }

  describe('모든 경우에', () => {
    it('타이틀 텍스트를 렌더한다', () => {
      const { getByText } = renderRecords({});
      expect(getByText(/나의 집중 기록/)).not.toBeNull();
    });
  });

  describe('로그인 하지 않은 경우', () => {
    it('LogInToUnlock을 렌더하고, 데이터를 페치하지 않는다.', () => {
      const { getByText } = renderRecords({});
      expect(
        getByText(/로그인하고 나의 집중 기록을 확인해보세요!/),
      ).not.toBeNull();
    });
  });

  describe('로그인한 경우', () => {
    it('기록 데이터를 페치하고 기록 데이터를 렌더한다.', () => {
      const fetchRecords = jest.fn().mockResolvedValue({
        daily: 207,
        weekly: 3098,
        monthly: -20325,
      });
      const { getByText } = renderRecords({ fetchRecords });
      expect(fetchRecords).toBeCalled();
      expect(getByText(/207/)).not.toBeNull();
      expect(getByText(/3098/)).not.toBeNull();
      expect(getByText(/-20325/)).not.toBeNull();
    });

    it('기록 데이터를 페치에 실패하고 알린다.', () => {
      const fetchRecords = jest.fn().mockRejectedValue('failed');
      const { getByText } = renderRecords({ fetchRecords });
      expect(fetchRecords).toBeCalled();
      expect(getByText(/데이터를 불러올 수 없습니다./)).not.toBeNull();
    });
  });
});
