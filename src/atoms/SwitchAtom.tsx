import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface ISwitchAtomProps {
  value: boolean;
  setValue: () => void;
}

function SwitchAtom({ value, setValue }: ISwitchAtomProps) {
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
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  /* 글씨 선택 안되게 하기 */
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
`;

const SwitchContainter = styled.div<Partial<ISwitchAtomProps>>`
  background-color: ${({ theme: { colors } }) => colors.whiteWine};
  width: 6.75rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  display: flex;
  justify-content: ${(props) => (props.value ? 'flex-end' : 'flex-start')};
`;
