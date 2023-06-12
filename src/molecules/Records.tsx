import React, { ReactNode, useEffect, useState } from 'react';
import { CardAtom, TagAtom, tmpTypo } from '../atoms';
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
    const newRecords = await fetchRecords();
    if (newRecords) {
      setRecords(() => newRecords);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Records.titleLabel
        fosi="2.32rem"
        fowe="700"
        ba="#4B86FA"
        style={{
          textAlign: 'left',
          width: '100%',
          position: 'absolute',
          top: '2.375rem',
          left: '2.75rem',
        }}
      >
        나의 집중 기록
      </Records.titleLabel>
      <Records.CardAtom
        bg="transparent"
        w="83.87rem"
        h="36.18rem"
        margin="8.37rem 4.31rem 6.93rem 4.31rem"
      >
        {/* <RecordCell label="전일 대비" record={12} />
        <RecordCell label="전주 대비" record={23455} />
        <RecordCell label="전월 대비" record={-12345} /> */}
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

Records.titleLabel = tmpTypo;
Records.RecordCell = RecordCell;
Records.CardAtom = CardAtom;

export default Records;
