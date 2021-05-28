import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { solutionModalMode } from '../../actions';
import styled from 'styled-components';

import TopComment from '../../components/AnalysisClothes/topComment';
import ResultSlider from '../../components/Solution/resultSlider';
import AllItemsModal from '../../components/Solution/allItemsModal';
import DetailItemModal from '../../components/Solution/detailItemModal';
import axios from 'axios';

function SolutionResult() {
  const modalMode = useSelector((state) => state.solution.modalMode);
  const dispatch = useDispatch();
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    try {
      axios.get('http://localhost:3000/data/solution.json').then((response) => {
        setAllItems(response.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (allItems.length === 0) return null;
  return (
    <div>
      <TopComment comment="당신의 취향을 분석한 추천 룩입니다." />

      <ResultSlider />

      {modalMode === 1 && <AllItemsModal />}
      {modalMode === 2 && <DetailItemModal />}
      <ButtonContainer>
        <div>
          <LuxuryBtn
            onClick={() => {
              dispatch(solutionModalMode(1));
            }}
          >
            한번에 보기
          </LuxuryBtn>
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
  width: 250px;
  /* width: 15vw; */
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  color: #323b48;
  /* color: rgba(223, 190, 106, 0.7); */
  border-radius: 0;
  padding: 15px 20px 15px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 1px solid #323b48;
  /* border: 1px solid rgba(223, 190, 106, 0.3); */
  :hover {
    color: #fff;
    border: 1px solid rgba(223, 190, 106, 0);
    color: $white;
    background-position: 99% 50%;
  }
`;
