import styled from '@emotion/styled';
export { default as GoogleLoginAtom } from './GoogleLoginAtom';
export { default as TypoAtom } from './TypoAtom';
export { default as BtnAtom } from './BtnAtom';
export { default as CardAtom } from './CardAtom';
export { default as TagAtom } from './TagAtom';

// TODO: 작업이 끝나면 지워야하는 임시 타이포 아톰
export const tmpTypo = styled.p<{
  fosi?: string;
  fowe?: string;
  co?: string;
  ba?: string;
}>`
  background-color: yellow;
  font-size: ${({ fosi }) => fosi};
  font-weight: ${({ fowe }) => fowe};
  color: transparent;
  background: ${({ ba, theme }) => ba ?? theme.colors.subFontColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
