import styled from '@emotion/styled';
import React from 'react';
import { designTheme } from '../styles/theme';

/**
 * ProgressButtonAtom
 * 파이차트 모양의 Progress를 표시하는 버튼
 * @param {number} progress (1~100)% 값
 * @param {keyof typeof designTheme.colors} bgColor progress 색 지정
 */
const ProgressButtonAtom = styled.button<{
  progress: number;
  bgColor?: keyof typeof designTheme.colors;
}>`
  width: 4.455rem;
  height: 4.455rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.74325rem;
  font-style: normal;
  font-weight: 400;
  background: conic-gradient(
    ${({ theme, progress, bgColor }) =>
      bgColor ??
      theme.colors.titleColor +
        ' ' +
        progress +
        '%, 0, ' +
        theme.colors.whiteWine +
        ' ' +
        (100 - progress) +
        '%'}
  );
`;

export default ProgressButtonAtom;
