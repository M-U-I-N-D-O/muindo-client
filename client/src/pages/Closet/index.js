import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import ClosetModal from '../../components/Closet/closetModal';
import { useHistory } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { ModalContext } from '../../App';
import { ClothesIdContext } from '../../App';
import { ClothesPriceContext } from '../../App';

import Paper from '@material-ui/core/Paper';
import { closetModalOpen, closetModalMode, closetText } from '../../actions';

const ClothesBoxDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px;
  position: absolute;
  top: ${(props) => props.top || 0};
  left: ${(props) => props.left || 0};
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '56px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {

  },
  closetImg: {
    width: '60vw',
    maxWidth: '600px',
  },

  closetContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '340px',
    minWidth: '310px',
    width: '90vw',
    height: '650px',
    border: 'solid 3px',
    minHeight: '57vh',
    backgroundSize: '170px',
    backgroundPositionX: '55px',
    backgroundPositionY: '65px',
    backgroundRepeat: 'no-repeat',
  },
  leftClothesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '150px',

    marginRight: '15px',
  },
  hatContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '90px',
    height: '80px',
    justifyContent: 'center',
    border: 'solid 2px',
    margin: '15px 0px',
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '130px',
    height: '150px',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '15px 0px',
  },
  bottomContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '120px',
    height: '150px',
    justifyContent: 'center',
    border: 'solid 2px',
    margin: '15px 0px',
  },
  shoesContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '90px',
    height: '80px',
    justifyContent: 'center',
    border: 'solid 2px',
    margin: '15px 0px',
  },
  bagContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '90px',
    height: '120px',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '15px 0px',
  },
  clothesText: {
    fontSize: '21px',
  },
  btnBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '150px',
    width: '350px',
    marginTop: '55px',
    fontFamily: 'GmarketSansMedium',
    fontSize: '18px',
    fontWeight: 'bold',
  },

  eraseBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '150px',
    height: '60px',
  },
  closetPriceBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'GmarketSansMedium',
    fontWeight: 'bold',
    fontSize: '17px',
    marginTop: '40px',
    width: '200px',
    height: '50px',
  },
  makeLookBookBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'pre-wrap',
    width: '150px',
    height: '60px',
  },
  closetTextContainer: {
    marginTop: '40px',

    width: '250px',
    height: '60px',
  },
  a: {
    width: '550px',
  },
}));

function ClothesBox(props) {
  const dispatch = useDispatch();
  const { closetImg } = useContext(ModalContext);

  const handleClothesContainerClick = (event) => {
    dispatch(closetModalOpen(true));
    dispatch(closetModalMode(event.target.id));
  };

  return (
    <ClothesBoxDiv
      width={props.width}
      height={props.height}
      top={props.top}
      left={props.left}
      onClick={handleClothesContainerClick}
      id={props.modalMode}
    >
      {closetImg[props.modalMode] ? (
        <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg[props.modalMode]} id={props.modalMode} />
      ) : (
        <h2 style={{ fontSize: '18px', whiteSpace: 'pre-wrap' }} id={props.modalMode}>
          {props.clothesType}
        </h2>
      )}
    </ClothesBoxDiv>
  );
}

function Closet() {
  const history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();
  const mode = useSelector((state) => state.closetModal.mode);
  const text = useSelector((state) => state.closetModal.text);

  const { setClosetImg } = useContext(ModalContext);
  const { closetClothesId, setClosetClothesId } = useContext(ClothesIdContext);
  const { clothesPrice, setClothesPrice } = useContext(ClothesPriceContext);

  useEffect(() => {
    setClosetImg({
      hat: '',
      top: '',
      bottom: '',
      shoes: '',
      bag: '',
    });
    setClosetClothesId({
      hat: '',
      top: '',
      bottom: '',
      shoes: '',
      bag: '',
    });
    setClothesPrice({
      hat: 0,
      top: 0,
      bottom: 0,
      shoes: 0,
      bag: 0,
    });

    dispatch(closetText(''));
  }, [setClosetImg, setClosetClothesId, setClothesPrice, dispatch]);

  const handleEraseAllButtonClick = () => {
    setClosetImg({
      hat: '',
      top: '',
      bottom: '',
      shoes: '',
      bag: '',
    });
    setClosetClothesId({
      hat: '',
      top: '',
      bottom: '',
      shoes: '',
      bag: '',
    });
    setClothesPrice({
      hat: 0,
      top: 0,
      bottom: 0,
      shoes: 0,
      bag: 0,
    });
    dispatch(closetText(''));
    dispatch(closetModalMode(''));
  };
  const handleChangeClosetText = (event) => {
    dispatch(closetText(event.target.value));
  };

  return (
    <div className={classes.root}>
      {mode !== '' && <ClosetModal data={mode} />}

      <div className={classes.title}>
        <TopComment comment={'옷장에 옷을 넣어보세요.'} />
      </div>
      <Paper elevation={5} className={classes.closetContainer}>
        <ClothesBox width="90px" height="80px" modalMode="hat" top="45px" left="78px" clothesType={'모자🧢\n안경👓'} />
        <ClothesBox width="130px" height="155px" modalMode="top" top="155px" left="60px" clothesType="상의👕" />
        <ClothesBox width="120px" height="160px" modalMode="bottom" top="340px" left="65px" clothesType="하의👖" />
        <ClothesBox width="100px" height="70px" modalMode="shoes" top="530px" left="75px" clothesType="신발👟" />
        <ClothesBox width="100px" height="180px" modalMode="bag" top="220px" left="210px" clothesType="가방🎒" />
      </Paper>

      <div>
        <Paper variant="outlined" className={classes.closetPriceBox}>
          {'총 금액💰 : '} {clothesPrice.hat + clothesPrice.top + clothesPrice.bottom + clothesPrice.shoes + clothesPrice.bag}\
        </Paper>
      </div>

      <div className={classes.closetTextContainer}>
        <TextField
          placeholder="ex) 데이트, 동창회, 가족 모임 등"
          label="이 패션의 TPO💬"
          value={text}
          onChange={handleChangeClosetText}
          fullWidth
          variant="outlined"
          rows="2"
          multiline
        />
      </div>

      <div className={classes.btnBox}>
        <Paper elevation={4} className={classes.eraseBtn} onClick={handleEraseAllButtonClick}>
          모두 지우기💫
        </Paper>
        {closetClothesId['hat'] || closetClothesId['top'] || closetClothesId['bottom'] || closetClothesId['shoes'] || closetClothesId['bag'] ? (
          <Paper
            elevation={4}
            className={classes.makeLookBookBtn}
            onClick={() => {
              history.push('/closet/look_book');
            }}
          >
            {'LOOKBOOK\n    만들기📸'}
          </Paper>
        ) : (
          <Paper elevation={4} className={classes.makeLookBookBtn}>
            <Button style={{ whiteSpace: 'pre-wrap', fontSize: '17px' }} disabled>
              {'LOOKBOOK\n 만들기📸'}
            </Button>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default Closet;
