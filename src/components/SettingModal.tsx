import styled from '@emotion/styled';
import { TypoAtom } from '../atoms';

const SettingModal = () => {
  return (
    <SettingContainer>
      <TypoAtom fontSize={`2.324375rem`} fontColor="#4B86FA">
        설정
      </TypoAtom>
    </SettingContainer>
  );
};

export default SettingModal;

const SettingContainer = styled.div`
  padding: 2.324375rem 3.2925rem;
`;
