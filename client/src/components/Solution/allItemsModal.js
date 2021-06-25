import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { solutionModalMode } from '../../actions';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';

import InfiniteScroll from 'react-infinite-scroll-component';

const PAGE_NUMBER = 1;

function AllItemsModal() {
  const modalMode = useSelector((state) => state.solution.modalMode);
  const dispatch = useDispatch();

  const [allItems, setAllItems] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    try {
      axios.get('http://localhost:3000/data/solution.json').then((response) => {
        console.log('page :', page);
        setAllItems([...allItems, ...response.data.data]);
      });
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  const scrollToEnd = () => {
    console.log('마지막');
    setTimeout(() => {
      setPage(page + 1);
    }, 1000);
  };

  return (
    <div>
      <Dialog open={modalMode === 1} scroll={'paper'} maxWidth="md">
        <MyDialogTitle>추천 룩(Look) 리스트</MyDialogTitle>
        <MyDialogContent dividers={true} id="scrollableDiv">
          {Array.isArray(allItems) && allItems.length !== 0 && (
            <InfiniteScroll
              dataLength={allItems.length}
              next={() => scrollToEnd()}
              hasMore={true}
              loader={<h1 style={{ textAlign: 'center' }}>Loading..🕵️‍♂️</h1>}
              scrollableTarget="scrollableDiv"
            >
              {allItems.map((item, index) => {
                return (
                  <ItemBox
                    key={index}
                    onClick={() => {
                      dispatch(solutionModalMode(2));
                    }}
                  >
                    <ItemImage src={`${item[0]}`} alt={`${item[0]}`} />
                    <ItemText>{item[1]}</ItemText>
                  </ItemBox>
                );
              })}
            </InfiniteScroll>
          )}
        </MyDialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(solutionModalMode(0));
            }}
            color="primary"
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AllItemsModal;

const Container = styled.div``;
const ItemBox = styled.div`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  padding: 1vh 0;
`;
const MyDialogContent = styled(DialogContent)`
  padding: 2vh 1vw;
  text-align: center;
`;
const MyDialogTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 2vh 5vw;
  margin: 0;
`;
const ItemImage = styled.img`
  width: 75px;
  height: 100px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 1vw;
  margin-right: 1vw;
  @media only screen and (min-width: 375px) {
    width: 90px;
  }
`;
const ItemText = styled.h1`
  font-size: 1vw;
`;
