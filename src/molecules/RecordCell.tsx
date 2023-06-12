/** @jsxImportSource @emotion/react */
import React from 'react';
import { TagAtom, tmpTypo } from '../atoms';
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
        `}
      >
        <RecordCell.RecordTypo
          ba={
            record > 0
              ? 'linear-gradient(114.81deg, #00C2FF 22.57%, rgba(0, 117, 255, 0) 65.81%), #FA00FF;'
              : '#222F3E'
          }
          fosi={'7.43rem'}
          fowe={'800'}
        >
          {record > 0 ? '+' + record.toLocaleString() : record.toLocaleString()}
        </RecordCell.RecordTypo>
        <RecordCell.bodyTypo
          fosi="2.324rem"
          css={css`
            margin-left: 20px;
          `}
        >
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
RecordCell.RecordTypo = tmpTypo;
RecordCell.bodyTypo = tmpTypo;

export default RecordCell;
