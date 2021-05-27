import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { solutionModalMode } from '../../actions';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PAGE_NUMBER = 1;

function AllItemsModal(props) {
  const modalMode = useSelector((state) => state.solution.modalMode);
  const dispatch = useDispatch();

  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    try {
      // axios.get('http://localhost:3000/data/solution.json').then((response) => {
      //   setAllItems(response.data.data);
      // });
      console.log(page);
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  // const scrollToEnd = () => {
  //   setPage(page + 1);
  // };
  // window.onscroll = function () {
  //   // 스크롤 최하단에 도달했을 때, 적용
  //   if (
  //     document.querySelector('#scroll-dialog-description').innerHeight + document.querySelector('#scroll-dialog-description').scrollTop >=
  //     document.querySelector('#scroll-dialog-description').offsetHeight * 0.95
  //   ) {
  //     scrollToEnd();
  //   }
  // };
  // const handleClose = () => {
  //   dispatch(solutionModalMode(0));
  // };
  return (
    <div>
      <Dialog
        open={modalMode === 1}
        // onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
      >
        <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">
          추천 룩(Look) 리스트
        </DialogTitle>
        <DialogContent dividers={true}>
          <Container id="scroll-dialog-description">
            {props.allItems.map((item, index) => {
              return (
                <ItemBox key={index}>
                  <ItemImage src={`${item[0]}`} alt={`${item[0]}`} />
                  <ItemText>{item[1]}</ItemText>
                </ItemBox>
              );
            })}
          </Container>
          {/* <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(solutionModalMode(2));
            }}
            color="primary"
          >
            상세보기
          </Button>
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

const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const ItemBox = styled.div`
  display: inline-block;
  text-align: center;
`;
const ItemImage = styled.img`
  width: 70px;
  height: 100px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 1vw;
  margin-right: 1vw;
`;
const ItemText = styled.h1``;
