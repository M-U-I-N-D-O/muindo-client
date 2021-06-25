import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { solutionModalMode } from '../../actions';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
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
        console.log(response.data.data);
        setAllItems(response.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (allItems.length === 0) return null;
  return (
    <Container>
      <ResultSlider />

      {modalMode === 1 && <AllItemsModal />}
      {modalMode === 2 && <DetailItemModal />}
      <ButtonContainer>
        <div>
          <ButtonPaper
            elevation={5}
            onClick={() => {
              dispatch(solutionModalMode(1));
            }}
          >
            <ButtonText>룩 모아보기 📕</ButtonText>
          </ButtonPaper>
        </div>
        <div>
          <Link style={{ textDecoration: 'none' }} to="/solution">
            <ButtonPaper elevation={5}>
              <ButtonText>스타일 재설정 💫</ButtonText>
            </ButtonPaper>
          </Link>
        </div>
      </ButtonContainer>
    </Container>
  );
}

export default SolutionResult;

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 60px;
`;
const ButtonContainer = styled.div`
  padding-top: 2vh;
  height: 100%;
  text-align: center;
`;
const ButtonPaper = styled(Paper)`
  width: 200px;
  margin: 0 auto;
  margin-bottom: 1vh;
`;
const ButtonText = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-top: 0;
  padding: 1vh 0;
`;
