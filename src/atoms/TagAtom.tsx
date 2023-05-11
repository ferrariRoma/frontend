import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IChildProps } from '../shared/interfaces';

interface ITagAtomProps extends IChildProps {
  handler?: () => void;
  styleOption?: ITagSpanProps;
}

interface ITagSpanProps {
  bg?:
    | 'white'
    | 'lightGrey'
    | 'titleColor'
    | 'whiteWine'
    | 'lightGrey_2'
    | 'subFontColor';
  fontsize?: 'sm' | 'md1' | 'md2' | 'b1' | 'b2';
  size?: 'sm' | 'md' | 'big';
  bold?: boolean;
  shadow?: 'basic_shadow' | 'button_shadow';
}

/**
 * TagAtom 태그 모양의 아톰
 * handler를 넘기면 button, 없을 때는 div
 */
function TagAtom({ children, handler, styleOption }: ITagAtomProps) {
  if (handler)
    return (
      <button onClick={handler}>
        <TagSpan {...styleOption}>{children}</TagSpan>
      </button>
    );
  else
    return (
      <div>
        <TagSpan {...styleOption}>{children}</TagSpan>
      </div>
    );
}

const TagSpan = styled.span<ITagSpanProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '0.38rem 1.16rem';
      case 'md':
        return '0.5rem 1.76rem';
      case 'big':
        return '0.58rem 2rem';
      default:
        return '0.5rem 1.76rem';
    }
  }};
  background: ${({ bg, theme }) =>
    bg ? theme.colors[bg] : theme.colors.white};
  border-radius: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '1.45rem';
      case 'md':
        return '2.1rem';
      case 'big':
        return '2.42rem';
      default:
        return '2.1rem';
    }
  }};
  box-shadow: ${({ theme, shadow }) =>
    shadow ? theme.shadows[shadow] : 'none'};

  font-family: pretendard;
  font-size: ${({ fontsize }) => {
    switch (fontsize) {
      case 'sm':
        return 1.1;
      case 'md1':
        return 1.5;
      case 'md2':
        return 1.8;
      case 'b1':
        return 2.5;
      case 'b2':
        return 3;
      default:
        return 1.5;
    }
  }}rem;
  font-weight: ${({ bold }) => (bold ? 500 : 400)};
  line-height: 120%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default TagAtom;
