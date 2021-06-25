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
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Dialog open={modalMode === 2} scroll={'paper'} maxWidth="md">
        <MyDialogTitle>제품 상세 정보</MyDialogTitle>
        <MyDialogContent dividers={true}>
          <MainContainer>
            <img src="/images/solution/detailMainImg.png" alt="/images/solution/detailMainImg.png" width="85%" height="auto" />
          </MainContainer>

          <div className="thumbnail-slider-wrap-detail">
            <Slider {...settings}>
              <SubContainer>
                <ItemsImg src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" />
                <BrandText>네블로니</BrandText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <ItemsImg src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" />
                <BrandText>네블로니</BrandText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <ItemsImg src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" />
                <BrandText>네블로니</BrandText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <ItemsImg src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" />
                <BrandText>네블로니</BrandText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <ItemsImg src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" />
                <BrandText>네블로니</BrandText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
              <SubContainer>
                <ItemsImg src="/images/solution/detailSubImg.png" alt="/images/solution/detailSubImg.png" />
                <BrandText>네블로니</BrandText>
                <MainText>[MADE IN ITALY] 일솔레 스니 커즈 화이트/올리브 콤보</MainText>
                <SubText>186,000원</SubText>
              </SubContainer>
            </Slider>
          </div>
        </MyDialogContent>
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
const MyDialogTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 2vh 5vw;
  margin: 0;
`;
const MyDialogContent = styled(DialogContent)`
  padding: 0;
`;
const SubContainer = styled.div`
  max-width: 240px;
  text-align: left;
`;
const ItemsImg = styled.img`
  width: 95%;
  height: 95%;
`;
const BrandText = styled.h3`
  font-size: 1vw;
  width: 95%;
`;
const MainText = styled.h2`
  font-size: 1vw;
  font-weight: bold;
  width: 95%;
`;
const SubText = styled.p`
  font-size: 1vw;
  font-weight: bold;
  width: 95%;
`;
