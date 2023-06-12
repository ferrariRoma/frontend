import styled from '@emotion/styled';
import { IChildProps } from '../shared/interfaces';
import { designTheme } from '../styles/theme';

interface ITypoProps extends IChildProps {
  fontSize?: keyof typeof designTheme.fontSize;
  fontColor?: keyof typeof designTheme.colors;
}

const TypoAtom = ({ children, fontColor, fontSize }: ITypoProps) => {
  return (
    <Typo fontColor={fontColor} fontSize={fontSize}>
      {children}
    </Typo>
  );
};

export default TypoAtom;

const Typo = styled.span<ITypoProps>`
  color: ${({ fontColor }) =>
    fontColor
      ? designTheme.colors[fontColor]
      : designTheme.colors.subFontColor};
  font-size: ${({ fontSize }) =>
    fontSize
      ? designTheme.fontSize[fontSize].size
      : designTheme.fontSize.body.size};
  font-weight: ${({ fontSize }) =>
    fontSize
      ? designTheme.fontSize[fontSize].weight
      : designTheme.fontSize.body.weight};
`;
