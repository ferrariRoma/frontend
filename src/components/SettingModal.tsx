import styled from '@emotion/styled';
import { SwitchAtom, TagAtom, TypoAtom } from '../atoms';
import { useState } from 'react';
import { usersApi } from '../shared/apis';
import IconAtom from '../atoms/IconAtom';

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
