import { useState } from 'react';

import { SwitchAtom, TagAtom, TypoAtom } from '../atoms';
import IconAtom from '../atoms/IconAtom';

import { usersApi } from '../shared/apis';

import styled from '@emotion/styled';

// TODO : state를 상위 컴포넌트로 뽑아낼 수는 없을까?.. 그게 더 괜찮은 방법이지 않을까?..
// TODO : 추가적으로 이런 모양의 선택지를 템플릿으로 뽑아낼 수는 없을까?
// TODO : Compound 적용해보자
const SettingModal = () => {
  const [value, setValue] = useState<boolean>(false);
  const [isOver, setIsOver] = useState<boolean>(false);

  const handleSwitch = (): void => {
    setValue((prev) => !prev);
  };

  const handleLogout = (): void => {
    return usersApi.logout();
  };

  const tooltipMouseOver = () => {
    setIsOver(true);
  };
  const tooltipMouseLeave = () => {
    setIsOver(false);
  };

  return (
    <>
      <SettingContainer>
        <ExtremeContainer>
          <TypoAtom fontSize={'h4'}>익스트림 모드</TypoAtom>
          <TooltipWrapper>
            {isOver ? (
              <Tooltip>
                <TypoAtom fontSize={'tooltip'}>여기여기여기여기</TypoAtom>
              </Tooltip>
            ) : null}
            <IconAtom
              onMouseOver={tooltipMouseOver}
              onMouseLeave={tooltipMouseLeave}
              backgroundColor={'whiteWine'}
              size={1.5625}
            >
              <img alt="close" src="icons/tooltip.svg"></img>
            </IconAtom>
          </TooltipWrapper>
          {/* TODO : 전역 객체로 처리해주자 */}
          <SwitchAtom setValue={handleSwitch} value={value} />
        </ExtremeContainer>
        <TagAtom
          handler={handleLogout}
          styleOption={{ size: 'sm', fontsize: 'sm' }}
        >
          데이터 초기화
        </TagAtom>
        <TagAtom
          handler={handleLogout}
          styleOption={{ size: 'sm', fontsize: 'sm' }}
        >
          회원탈퇴
        </TagAtom>
      </SettingContainer>
    </>
  );
};

export default SettingModal;

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 1.2rem;
  }
`;

const ExtremeContainer = styled.div`
  display: flex;
  align-items: center;

  > :nth-of-type(2) {
    margin-left: 0.3125rem;
  }

  > :last-child {
    margin-left: 1.8125rem;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  width: max-content;
  background-color: white;
  padding: 5px;
  border-radius: 3px;
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
`;

const TooltipWrapper = styled.div`
  position: relative;
`;
