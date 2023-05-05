import { useTheme } from '@emotion/react';
import { colorTheme } from '../styles/theme';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface ISwitchAtomProps {
  value: boolean;
  setValue: () => void;
}

function SwitchAtom({ value, setValue }: ISwitchAtomProps) {
  // QUESTION : 테마 적용 어떻게 하는건가요?
  // const theme = useTheme();

  return (
    <SwitchContainter value={value} onClick={setValue}>
      <Switch layout>{value ? `on` : `off`}</Switch>
    </SwitchContainter>
  );
}

export default SwitchAtom;

// TODO : 색 피그마에 맞게 수정하기
const Switch = styled(motion.div)`
  width: 4.074375rem;
  height: 2.5rem;
  border-radius: 1.2rem;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwitchContainter = styled.div<Partial<ISwitchAtomProps>>`
  width: 5.75rem;
  height: 2.5rem;
  border-radius: 3rem;
  display: flex;
  justify-content: ${(props) => (props.value ? 'flex-end' : 'flex-start')};
  background-color: grey;
`;
