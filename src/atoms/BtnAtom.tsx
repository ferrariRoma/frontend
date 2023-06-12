import { IChildProps } from '../shared/interfaces';

interface IBtnAtomProps extends IChildProps {
  handler: () => void;
}

function BtnAtom({ children, handler, ...props }: IBtnAtomProps) {
  return (
    <div onClick={handler} style={{ ...props }}>
      {children}
    </div>
  );
}

export default BtnAtom;
