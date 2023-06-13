import React, { ReactNode, useEffect, useState } from 'react';
import { CardAtom, TagAtom, TypoAtom } from '../atoms';
import { IChildProps, ITotalFocusTime } from '../shared/interfaces';
import LogInToUnlock from './LogInToUnlock';
import RecordCell from './RecordCell';

export interface IRecordsProps extends IChildProps {
  isLogin: boolean;
  fetchRecords: () => Promise<ITotalFocusTime>;
}

function Records({ isLogin, fetchRecords }: IRecordsProps) {
  const [records, setRecords] = useState<ITotalFocusTime>({
    daily: 0,
    weekly: 0,
    monthly: 0,
  });

  const fetchData = async () => {
    try {
      const newRecords = await fetchRecords();
      if (newRecords) {
        setRecords(() => newRecords);
      }
    } catch {
      window.alert('데이터를 불러올 수 없습니다.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          textAlign: 'left',
          width: '100%',
          position: 'absolute',
          top: '2.375rem',
          left: '2.75rem',
        }}
      >
        <Records.titleLabel fontSize="h3_bold" fontColor="titleColor">
          나의 집중 기록
        </Records.titleLabel>
      </div>
      <Records.CardAtom
        bg="transparent"
        w="83.87rem"
        h="36.18rem"
        margin="8.37rem 4.31rem 6.93rem 4.31rem"
      >
        <RecordCell label="전일 대비" record={records.daily} />
        <RecordCell label="전주 대비" record={records.weekly} />
        <RecordCell label="전월 대비" record={records.monthly} />
      </Records.CardAtom>
      {!isLogin && (
        <LogInToUnlock
          navigate={() => {
            console.log('login clicked');
            return;
          }}
          subLabel="로그인하고 나의 집중 기록을 확인해보세요!"
        />
      )}
    </>
  );
}

Records.titleLabel = TypoAtom;
Records.RecordCell = RecordCell;
Records.CardAtom = CardAtom;

export default Records;
