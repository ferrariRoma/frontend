import styled from '@emotion/styled';
import { SwitchAtom, TagAtom, TypoAtom } from '../atoms';
import { useState } from 'react';
import { usersApi } from '../shared/apis';

const SettingModal = () => {
  const [value, setValue] = useState<boolean>(false);

  const handleSwitch = (): void => {
    setValue((prev) => !prev);
  };

  const handleLogout = (): void => {
    return usersApi.logout();
  };

  return (
    <SettingContainer>
      <ExtremeContainer>
        <TypoAtom fontSize="1.9375rem">익스트림 모드</TypoAtom>
        // TODO : 마우스 호버 했을 때 설명 띄워주기~
        <QuestionWrapper>
          <span className="material-symbols-outlined">question_mark</span>
        </QuestionWrapper>
        <SwitchAtom setValue={handleSwitch} value={value} />
      </ExtremeContainer>
      <TagAtom handler={handleLogout}>로그아웃</TagAtom>
      <TagAtom handler={handleLogout}>데이터 초기화</TagAtom>
      <TagAtom handler={handleLogout}>회원탈퇴</TagAtom>
    </SettingContainer>
  );
};

export default SettingModal;

const SettingContainer = styled.div`
  padding: 2.324375rem 3.2925rem;
  display: flex;
  flex-direction: column;
  * {
    margin-bottom: 1.2rem;
  }
`;

const ExtremeContainer = styled.div`
  display: flex;
  align-items: center;
  > :nth-of-type(2) {
    margin-left: 0.5rem;
  }
  > :last-child {
    margin-left: 1.8125rem;
  }
`;

const QuestionWrapper = styled.div`
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 1.5625rem;
  background-color: ${({ theme: { colors } }) => colors.whiteWine};
  color: ${({ theme: { colors } }) => colors.white};
`;
