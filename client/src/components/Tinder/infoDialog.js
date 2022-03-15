import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { closeTinderInfo } from '../../actions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import Slider from 'react-slick';

function InfoDialog() {
  const mode = useSelector((state) => state.tinder.infoToggle);
  const dispatch = useDispatch();
  const infoList = [
    ['/images/main/infoConfirm.gif', '지금 룩이 마음에 들면 ?.오른쪽으로 슬라이딩 !'],
    ['/images/main/infoNope.gif', '지금 룩이 별로면 ?.왼쪽으로 슬라이딩 !'],
    ['/images/main/infoSave.gif', '저장하고 싶으면 ?. 하트를 누르면 저장도 돼요 :)'],
  ];
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClose = () => {
    dispatch(closeTinderInfo(false));
  };

  return (
    <DialogContainer>
      <Dialog open={mode} onClose={handleClose}>
        <MyDialogTitle>컨펌하기 Guide</MyDialogTitle>
        <MyDialogContent dividers={true}>
          <Slider {...settings}>
            {infoList.map((info, index) => {
              return (
                <div key={index}>
                  <MyInfoImg key={index} src={info[0]} alt="gif" width="100%" height="400px" />
                  <MyInfoText>
                    {info[1].split('.')[0]} <br /> {info[1].split('.')[1]}
                  </MyInfoText>
                </div>
              );
            })}
          </Slider>
        </MyDialogContent>
        <MyDialogActions>
          <Button onClick={handleClose}>시작하기</Button>
        </MyDialogActions>
      </Dialog>
    </DialogContainer>
  );
}

export default InfoDialog;

const DialogContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const MyDialogTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  margin: 7px 0;
`;
const MyDialogContent = styled(DialogContent)`
  padding: 5px;
`;
const MyDialogActions = styled(DialogActions)`
  justify-content: center;
  padding: 4px;
`;
const MyInfoImg = styled.img`
  max-width: 375px;
  margin: 0 auto;
`;
const MyInfoText = styled.p`
  text-align: center;
  margin-top: 8px;
  margin-bottom: 0;
`;
