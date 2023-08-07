import styled from '@emotion/styled';
import React from 'react';
import { IChildProps } from '../shared/interfaces';
import { TypoAtom } from '../atoms';
import { Clock, SideButtons } from '../molecules';
import ProgressButtonAtom from '../atoms/ProgressButtonAtom';

export interface IMainTodoProps extends IChildProps {
  isLogin: boolean;
}

function MainTodo({ isLogin, children }: IMainTodoProps) {
  return (
    <MainTodoContainer>
      <MainTodoContentWrapper>
        <Clock></Clock>
        <MainTodoCenter>
          <SideButtons>
            <SideButtons.ProgressButton progress={45}>
              45
            </SideButtons.ProgressButton>
            <SideButtons.ProgressButton progress={45}>
              45
            </SideButtons.ProgressButton>
          </SideButtons>
          <div>메인</div>
          <SideButtons>
            <SideButtons.IconButton
              onClick={() => {
                console.log('clicked');
              }}
              imageSrc="icons/hamburger.svg"
            />
            <SideButtons.IconButton
              onClick={() => {
                console.log('clicked');
              }}
              imageSrc="icons/add.svg"
            />
          </SideButtons>
        </MainTodoCenter>
      </MainTodoContentWrapper>
    </MainTodoContainer>
  );
}

const MainTodoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTodoContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainTodoCenter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MainTodo;
