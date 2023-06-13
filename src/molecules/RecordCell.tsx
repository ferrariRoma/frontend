/** @jsxImportSource @emotion/react */
import React from 'react';
import { TagAtom, TypoAtom } from '../atoms';
import { IChildProps } from '../shared/interfaces';
import { css } from '@emotion/react';

interface IRankingProps extends IChildProps {
  label: string;
  record: number;
}

function RecordCell({ children, label, record }: IRankingProps) {
  // Typo에 적용된 inline css들은 typo 컴포넌트 머지 이후 변경 필요
  return (
    <div
      css={css`
        margin-bottom: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        gap: 8rem;
      `}
    >
      <RecordCell.RecordLabel
        styleOption={{ size: 'big', fontsize: 'b1', shadow: 'basic_shadow' }}
      >
        {label}
      </RecordCell.RecordLabel>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.25rem;
        `}
      >
        <RecordCell.RecordTypo fontSize={'h1'} rainbow={record > 0}>
          {record > 0 ? '+' + record.toLocaleString() : record.toLocaleString()}
        </RecordCell.RecordTypo>
        <RecordCell.bodyTypo fontSize={'h3'}>
          분 ({formatRecord(record)})
        </RecordCell.bodyTypo>
      </div>
    </div>
  );
}

const formatRecord = (record: number): string => {
  const isMinus = record < 0;
  record = Math.abs(record);
  if (record >= 720) {
    const hours = record % 720;
    return (
      Math.floor(record / 720) +
      '일' +
      Math.floor(hours / 60) +
      '시간' +
      (hours % 60) +
      '분'
    );
  }
  if (record >= 60) {
    return Math.floor(record / 60) + '시간' + (record % 60) + '분';
  }
  return (isMinus ? '-' : '') + record + '분';
};

RecordCell.RecordLabel = TagAtom;
RecordCell.RecordTypo = TypoAtom;
RecordCell.bodyTypo = TypoAtom;

export default RecordCell;
