import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { solutionModalMode } from '../../actions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Slider from 'react-slick';

import './detailItemSlider.css';

function DetailItemModal() {
  const modalMode = useSelector((state) => state.solution.modalMode);
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Dialog
        open={modalMode === 2}
        // onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
      >
        <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">
          제품 상세 정보
        </DialogTitle>
        <DialogContent dividers={true}>
          <MainContainer>
            <img src="/images/solution/detailMainImg.png" alt="/images/solution/detailMainImg.png" width="80%" height="80%" />
          </MainContainer>

          <div className="thumbnail-slider-wrap-detail">
            <Slider {...settings}>
              <SubContainer>
                <img src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" width="100%" height="100%" />
                <MainText>네블로니</MainText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <img src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" width="100%" height="100%" />
                <MainText>네블로니</MainText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <img src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" width="100%" height="100%" />
                <MainText>네블로니</MainText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <img src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" width="100%" height="100%" />
                <MainText>네블로니</MainText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <img src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" width="100%" height="100%" />
                <MainText>네블로니</MainText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <img src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" width="100%" height="100%" />
                <MainText>네블로니</MainText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
            </Slider>
          </div>

          {/* <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
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
              dispatch(solutionModalMode(1));
            }}
            color="primary"
          >
            이전
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

export default DetailItemModal;

const MainContainer = styled.div`
  text-align: center;
  margin: 3vh 0;
`;
const SubContainer = styled.div`
  max-width: 240px;
`;
const MainText = styled.h3`
  font-size: 1vw;
`;
const SubText = styled.p`
  font-size: 0.8vw;
`;
