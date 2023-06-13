import React, { ReactNode, useEffect, useState } from 'react';
import { CardAtom, TypoAtom } from '../atoms';
import { IChildProps, IRanking } from '../shared/interfaces';
import RankingChart from './RankingChart';
import LogInToUnlock from './LogInToUnlock';
import styled from '@emotion/styled';
import RankingTexts from './RankingTexts';
import { formatTime } from '../shared/utils';

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
          height: 'fit-content',
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
      </RankingLeftContainer>

      <RankingRightContainer>
        <Ranking.CardAtom
          bg="transparent"
          w="100%"
          h="90%"
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
  /* grid-auto-columns: max-content; */
  grid-auto-rows: auto 1fr;
  grid-template-columns: 1fr 2fr;
  flex-direction: row;
  grid-area: span;
  justify-content: center;
  box-sizing: border-box;
  /* grid-template-areas: 'main_content top' 'main_content bottom'; */
  padding: 2.75rem;
`;
const RankingLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  grid-column: 1;
`;

const RankingRightContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-column: 2 / 4;
`;

export default Ranking;
