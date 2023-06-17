import React, { ReactNode, useEffect, useState } from 'react';
import { CardAtom, TypoAtom } from '../atoms';
import { IChildProps, IRanking } from '../shared/interfaces';
import RankingChart from './RankingChart';
import LogInToUnlock from './LogInToUnlock';
import styled from '@emotion/styled';
import RankingTexts from './RankingTexts';
import { formatTime } from '../shared/utils';
import CartegorySelector from './CartegorySelector';

export interface IRankingProps extends IChildProps {
  fetchRanking: () => Promise<IRanking>;
  isLogin: boolean;
}

function Ranking({ children, fetchRanking, isLogin }: IRankingProps) {
  const [ranking, setRanking] = useState<IRanking>();

  const fetchData = async () => {
    const newRanking = await fetchRanking();
    if (newRanking) {
      setRanking(() => newRanking);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RankingContainer>
      <div
        style={{
          textAlign: 'left',
          width: '100%',
          gridColumn: '1/3',
          gridRow: 'auto',
          height: '100%',
        }}
      >
        <Ranking.titleLabel fontSize="h3_bold" fontColor="titleColor">
          카테고리 별 랭킹
        </Ranking.titleLabel>
      </div>

      <RankingLeftContainer>
        <RankingTexts>
          <RankingTexts.Typo fontSize={'h3'}>이번 주</RankingTexts.Typo>
          <div className="one_line">
            <RankingTexts.Tag
              styleOption={{
                size: 'big',
                bg: 'white',
                fontsize: 'b2',
                shadow: 'button_shadow',
              }}
            >
              {'개발'}
            </RankingTexts.Tag>
            <RankingTexts.Typo fontSize={'h3'}>에</RankingTexts.Typo>
          </div>
          <div className="one_line time">
            {formatTime(ranking?.user.time ?? 0)
              .split(/(\d+)/)
              .slice(1)
              .map((text, idx) => {
                return (
                  <RankingTexts.Typo
                    fontSize={idx % 2 === 0 ? 'h1' : 'h3_bold'}
                  >
                    {text}
                  </RankingTexts.Typo>
                );
              })}
          </div>
          <RankingTexts.Typo fontSize={'h3'}>집중했어요.</RankingTexts.Typo>
        </RankingTexts>
        <CartegorySelector
          categories={[
            { name: '공부', id: 0 },
            { name: '개발', id: 1 },
            { name: '음악', id: 2 },
            { name: '놀기', id: 3 },
            { name: '업무', id: 4 },
            { name: '장보기', id: 5 },
            { name: '잘살기', id: 6 },
            { name: '집안일', id: 7 },
            { name: '정신수양', id: 8 },
            { name: '필살기연구', id: 9 },
            { name: '2023', id: 10 },
            { name: '6월스터디', id: 11 },
            { name: '7월스터디', id: 12 },
            { name: '약속', id: 13 },
            { name: '리액트', id: 14 },
          ]}
          selected={{ name: '개발', id: 1 }}
          selectHandler={() => {
            console.log('카테고리 클릭됨');
          }}
        />
      </RankingLeftContainer>

      <RankingRightContainer>
        <Ranking.CardAtom
          bg="transparent"
          w="100%"
          h="100%"
          margin="0"
          padding="1.5rem"
          style={{ display: 'block', boxSizing: 'border-box' }}
        >
          {ranking && (
            <RankingChart
              options={Object.keys(ranking?.group[0])}
              // series={Object.values(ranking?.group[0])}
              series={[1, 3, 2, 5, 4, 1, 1, 2, 3, 6, 2]}
            />
          )}
        </Ranking.CardAtom>
      </RankingRightContainer>
      {!isLogin && (
        <LogInToUnlock
          navigate={() => {
            console.log('login clicked');
            return;
          }}
        />
      )}
    </RankingContainer>
  );
}

Ranking.titleLabel = TypoAtom;
Ranking.CardAtom = CardAtom;
Ranking.RankingChart = RankingChart;
Ranking.LogInToUnlock = LogInToUnlock;

const RankingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-rows: auto 1fr;
  grid-template-columns: 1fr 2fr;
  box-sizing: border-box;
  padding: 2.75rem;
  grid-column-gap: 2.5rem;
`;
const RankingLeftContainer = styled.div`
  width: 100%;
  height: inherit;
  grid-column: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  > :nth-of-type(2) {
    height: 20vmin;
  }
`;

const RankingRightContainer = styled.div`
  width: 100%;
  height: auto;
  grid-column: 2 / 4;
  box-sizing: border-box;
`;

export default Ranking;
