import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import TopComment from '../../components/AnalysisClothes/topComment';
import ResultSlider from '../../components/Solution/resultSlider';

function SolutionResult() {
  return (
    <div>
      <TopComment comment="당신의 취향을 분석한 추천 룩입니다." />
      <ResultSlider />

      <ButtonContainer>
        <div>
          <LuxuryBtn>한번에 보기</LuxuryBtn>
        </div>
        <div>
          <Link to="/solution">
            <LuxuryBtn>스타일 재설정</LuxuryBtn>
          </Link>
        </div>
      </ButtonContainer>
    </div>
  );
}

export default SolutionResult;

const ButtonContainer = styled.div`
  padding-top: 5vh;
  text-align: center;
`;
const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  width: 15vw;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  color: rgba(223, 190, 106, 0.7);
  border-radius: 0;
  padding: 15px 20px 15px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 1px solid rgba(223, 190, 106, 0.3);
  :hover {
    color: #fff;
    border: 1px solid rgba(223, 190, 106, 0);
    color: $white;
    background-position: 99% 50%;
  }
`;
