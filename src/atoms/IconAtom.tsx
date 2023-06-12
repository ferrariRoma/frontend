import { IChildProps } from '../shared/interfaces';
import { designTheme } from '../styles/theme';
import styled from '@emotion/styled';

interface IIconAtomProps
  extends IChildProps,
    Pick<
      React.DOMAttributes<HTMLDivElement>,
      'onClick' | 'onMouseOver' | 'onMouseLeave'
    > {
  size?: number;
  backgroundColor?: keyof typeof designTheme.colors | 'transparent';
}

const IconAtom = ({
  size = 4.455,
  children,
  backgroundColor = 'transparent',
  ...props
}: IIconAtomProps) => {
  return (
    <IconContainer backgroundColor={backgroundColor} size={size} {...props}>
      {children}
    </IconContainer>
  );
};

export default IconAtom;

const IconContainer = styled.div<
  Pick<IIconAtomProps, 'size' | 'backgroundColor'>
>`
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
  border-radius: ${({ size }) => (size ? `${size * 0.5}rem` : null)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor === 'transparent'
      ? backgroundColor
      : backgroundColor
      ? theme.colors[backgroundColor]
      : null};
`;
