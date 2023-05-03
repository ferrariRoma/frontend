import styled from '@emotion/styled';
import { IChildProps } from '../shared/interfaces';

interface IBtnAtomProps extends IChildProps {
  handler: () => void;
}

function BtnAtom({ children, handler }: IBtnAtomProps) {
  return <Btn onClick={handler}>{children}</Btn>;
}

export default BtnAtom;

const Btn = styled.div`
  width: 1rem;
  height: 1rem;
  font-size: 1.4rem;
`;
