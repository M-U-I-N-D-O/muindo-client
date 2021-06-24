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
// import { ClosetTextContext } from '../../App';

import Paper from '@material-ui/core/Paper';
import { closetModalOpen, closetModalMode, closetText, closetImg, closetPrice, closetId } from '../../actions';

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
    // // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    // width: '80vw',
    // maxWidth: '1024px',
    // minHeight: ' calc(100vh - 8.5rem)',
    // // height: '80vw',
  },
  title: {
    // marginTop: '25px',
    // marginBottom: '5px',
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
    // backgroundImage: `url('/images/closet/mannequin_2.png')`,
    // opacity: '0.85',
    backgroundSize: '170px',
    backgroundPositionX: '55px',
    backgroundPositionY: '65px',
    backgroundRepeat: 'no-repeat',
  },
  leftClothesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // maxWidth: '150px',
    // minWidth: '130px',
    width: '150px',

    marginRight: '15px',
  },
  hatContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '90px',

    // minWidth: '70px',
    // minHeight: '90px',
    // width: '40vw',
    width: '90px',
    height: '80px',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '15px 0px',
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '200px',
    // maxWidth: '120px',

    // minWidth: '90px',
    // minHeight: '150px',
    width: '130px',
    height: '150px',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '15px 0px',
  },
  bottomContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '120px',
    // minWidth: '90px',
    // minHeight: '150px',
    // width: '30vw',

    width: '120px',
    height: '150px',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '15px 0px',
  },
  shoesContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '90px',
    // minWidth: '70px',
    // minHeight: '90px',
    // width: '30vw',

    width: '90px',
    height: '80px',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '15px 0px',
  },
  bagContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '90px',
    // minWidth: '70px',
    // minHeight: '100px',
    // width: '30vw',

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
    // height: '60px',
  },
}));

function ClothesBox(props) {
  const dispatch = useDispatch();
  // const { closetImg } = useContext(ModalContext);
  // const { setModalMode } = useContext(ModalContext);
  // const { setOpenClosetModal } = useContext(ModalContext);
  // const open = useSelector((state) => state.closetModal.open);
  const img = useSelector((state) => state.closet.closetImage);

  const handleClothesContainerClick = (event) => {
    // setModalMode(event.target.id);
    // setOpenClosetModal(true);
    dispatch(closetModalOpen(true));
    dispatch(closetModalMode(event.target.id));
  };

  console.log(img);
  return (
    <ClothesBoxDiv
      width={props.width}
      height={props.height}
      top={props.top}
      left={props.left}
      onClick={handleClothesContainerClick}
      id={props.modalMode}
    >
      {img[props.modalMode] ? (
        <img style={{ width: '100%', height: '100%' }} alt="" src={img[props.modalMode]} id={props.modalMode} />
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
  const text = useSelector((state) => state.closet.text);
  const price = useSelector((state) => state.closet.closetPrice);
  const id = useSelector((state) => state.closet.closetId);

  // const { setOpenClosetModal } = useContext(ModalContext);
  // const { modalMode, setModalMode } = useContext(ModalContext);
  // const { setClosetImg } = useContext(ModalContext);
  // const { closetClothesId, setClosetClothesId } = useContext(ClothesIdContext);
  // const { clothesPrice, setClothesPrice } = useContext(ClothesPriceContext);
  // const { closetText, setClosetText } = useContext(ClosetTextContext);
  // const closetTextRef = useRef('');
  useEffect(() => {
    // setClosetImg({
    //   hat: '',
    //   top: '',
    //   bottom: '',
    //   shoes: '',
    //   bag: '',
    // });

    dispatch(closetImg({ hat: '', top: '', bottom: '', shoes: '', bag: '' }));

    // setClosetClothesId({
    //   hat: '',
    //   top: '',
    //   bottom: '',
    //   shoes: '',
    //   bag: '',
    // });
    dispatch(closetId({ hat: '', top: '', bottom: '', shoes: '', bag: '' }));
    // setClothesPrice(0);
    dispatch(closetPrice({ hat: 0, top: 0, bottom: 0, shoes: 0, bag: 0 }));

    // setClothesPrice({
    //   hat: 0,
    //   top: 0,
    //   bottom: 0,
    //   shoes: 0,
    //   bag: 0,
    // });

    // setClosetText('');
    dispatch(closetText(''));
  }, [dispatch]);

  // const handleClothesContainerClick = (event) => {
  //   setModalMode(event.target.id);
  //   setOpenClosetModal(true);
  // };

  const handleEraseAllButtonClick = () => {
    // setClosetImg({
    //   hat: '',
    //   top: '',
    //   bottom: '',
    //   shoes: '',
    //   bag: '',
    // });
    dispatch(closetImg({ hat: '', top: '', bottom: '', shoes: '', bag: '' }));

    // setClosetClothesId({
    //   hat: '',
    //   top: '',
    //   bottom: '',
    //   shoes: '',
    //   bag: '',
    // });
    dispatch(closetId({ hat: '', top: '', bottom: '', shoes: '', bag: '' }));

    // setClothesPrice({
    //   hat: 0,
    //   top: 0,
    //   bottom: 0,
    //   shoes: 0,
    //   bag: 0,
    // });
    // setModalMode('');
    dispatch(closetPrice({ hat: 0, top: 0, bottom: 0, shoes: 0, bag: 0 }));

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
          {'총 금액💰 : '} {price.hat + price.top + price.bottom + price.shoes + price.bag}\
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
        {id['hat'] || id['top'] || id['bottom'] || id['shoes'] || id['bag'] ? (
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
