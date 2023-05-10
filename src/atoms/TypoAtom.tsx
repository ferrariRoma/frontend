import styled from '@emotion/styled';
import { IChildProps } from '../shared/interfaces';

// DISCUSSION : size 통일하기 99.17 | 49.59 | 30.99

interface ITypoProps extends IChildProps {
  fontSize: '2rem' | '1.5rem' | '1rem';
  fontColor?: string;
}

const TypoAtom = ({ children, ...props }: ITypoProps) => {
  return <Typo {...props}>{children}</Typo>;
};

export default TypoAtom;

const Typo = styled.span<ITypoProps>`
  color: ${(props) => props.fontColor ?? '#252222'};
  font-size: ${(props) => props.fontSize};
`;
