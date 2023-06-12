import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import TypoAtom from './TypoAtom';

interface ISwitchAtomProps {
  value: boolean;
  setValue: () => void;
}

function SwitchAtom({ value, setValue }: ISwitchAtomProps) {
  return (
    <SwitchContainter value={value} onClick={setValue}>
      <Switch layout>
        <TypoAtom fontColor={'titleColor'} fontSize={'tag'}>
          {value ? `ON` : `OFF`}
        </TypoAtom>
      </Switch>
    </SwitchContainter>
  );
}

export default SwitchAtom;

// TODO : 색 피그마에 맞게 수정하기
const Switch = styled(motion.div)`
  width: 4.074375rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const SwitchContainter = styled.div<Partial<ISwitchAtomProps>>`
  background-color: ${({ theme: { colors } }) => colors.whiteWine};
  width: 5.5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  display: flex;
  justify-content: ${(props) => (props.value ? 'flex-end' : 'flex-start')};
  padding: 0.1875rem;
`;
