import { useTheme } from '@emotion/react';
import { colorTheme } from '../styles/theme';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface ISwitchAtomProps {
  value: boolean;
  setValue: () => void;
}

function SwitchAtom({ value, setValue }: ISwitchAtomProps) {
  const theme = useTheme<keyof typeof colorTheme>();
  return (
    <SwitchContainter value={value} onClick={setValue}>
      {<Switch layout>{value ? `on` : `off`}</Switch>}
    </SwitchContainter>
  );
}

export default SwitchAtom;

const Switch = styled(motion.div)`
  width: 0.306rem;
`;
const SwitchContainter = styled.div<Partial<ISwitchAtomProps>>`
  width: 6.75rem;
  height: 2.5rem;
  display: flex;
  justify-content: ${(props) => (props.value ? 'flex-end' : 'flex-start')};
`;
