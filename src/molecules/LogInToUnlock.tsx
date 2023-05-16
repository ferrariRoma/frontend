import { Children, isValidElement, ReactNode } from 'react';
import { IChildProps } from '../shared/interfaces';
import { TagAtom, TypoAtom } from '../atoms';
import styled from '@emotion/styled';

export interface ILogInToUnlockProps extends IChildProps {
  icon?: string;
  label?: string;
  subLabel?: string;
  navigate: () => void;
}

function LogInToUnlock({
  icon,
  label,
  subLabel,
  navigate,
}: ILogInToUnlockProps) {
  return (
    <UnlockContainer>
      <div className="labels">
        <img src={icon ?? '/icons/icon-lock.svg'} />
        <div>
          {/* <LogInToUnlock.typo fowe="700" fosi="1.74rem" ba="#4B86FA">
            {label ?? '로그인이 필요한 기능입니다.'}
          </LogInToUnlock.typo>
          <LogInToUnlock.typo fosi="2.32rem">
            {subLabel ?? '로그인하고 기능을 확인해보세요!'}
          </LogInToUnlock.typo> */}
        </div>
      </div>
      <LogInToUnlock.loginButton
        styleOption={{
          size: 'big2',
          fontsize: 'md1',
          bold: 'extraBold',
          bg: 'titleColor',
          shadow: 'button_shadow',
        }}
        handler={navigate}
      >
        로그인하기
      </LogInToUnlock.loginButton>
    </UnlockContainer>
  );
}

LogInToUnlock.typo = TypoAtom;
LogInToUnlock.loginButton = TagAtom;

const UnlockContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(31px);
  background: rgba(255, 255, 255, 0.5);
  background-clip: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .labels {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.37rem;
    margin-bottom: 1.31rem;
    img {
      width: 7.43rem;
      object-fit: contain;
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1.12rem;
    }
  }
`;

export default LogInToUnlock;
