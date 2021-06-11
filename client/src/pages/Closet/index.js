import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import ClosetModal from '../../components/Closet/closetModal';
import { useHistory } from 'react-router';
import TextField from '@material-ui/core/TextField';

import { ModalContext } from '../../App';
import { ClothesIdContext } from '../../App';
import { ClothesPriceContext } from '../../App';
import { ClosetTextContext } from '../../App';

import Paper from '@material-ui/core/Paper';

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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '340px',
    minWidth: '310px',
    width: '90vw',
    height: '650px',
    border: 'solid 4px',
    minHeight: '57vh',
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
    border: 'solid 3px',
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
    border: 'solid 3px',
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
    border: 'solid 3px',
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
    border: 'solid 3px',
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
    border: 'solid 3px',
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
    marginTop: '30px',
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
    marginTop: '30px',
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
    marginTop: '20px',

    width: '250px',
    height: '60px',
  },
}));

function Closet() {
  const history = useHistory();

  const classes = useStyles();

  const { setOpenClosetModal } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);
  const { closetClothesId, setClosetClothesId } = useContext(ClothesIdContext);
  const { clothesPrice, setClothesPrice } = useContext(ClothesPriceContext);
  const { closetText, setClosetText } = useContext(ClosetTextContext);
  // const closetTextRef = useRef('');
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
    // setClothesPrice(0);
    setClothesPrice({
      hat: 0,
      top: 0,
      bottom: 0,
      shoes: 0,
      bag: 0,
    });

    setClosetText('');
  }, [setClosetImg, setClosetClothesId, setClothesPrice, setClosetText]);

  const handleClothesContainerClick = (event) => {
    setModalMode(event.target.id);
    setOpenClosetModal(true);
  };

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
    setModalMode('');
  };
  const handleChangeClosetText = (event) => {
    setClosetText(event.target.value);
  };

  return (
    <div className={classes.root}>
      {modalMode !== '' && <ClosetModal data={modalMode} />}

      <div className={classes.title}>
        <TopComment comment={'옷장에 옷을 넣어보세요.'} />
      </div>
      <Paper elevation={5} className={classes.closetContainer}>
        <div className={classes.leftClothesContainer}>
          <div className={classes.hatContainer} onClick={handleClothesContainerClick} id="hat">
            {closetImg['hat'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['hat']} id="hat" />
            ) : (
              <h2 style={{ fontSize: '18px', whiteSpace: 'pre-wrap' }} id="hat">
                {'모자🧢\n안경👓'}
              </h2>
            )}
          </div>
          <div className={classes.topContainer} onClick={handleClothesContainerClick} id="top">
            {closetImg['top'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['top']} id="top" />
            ) : (
              <h2 className={classes.clothesText} id="top">
                상의👕
              </h2>
            )}
          </div>
          <div className={classes.bottomContainer} onClick={handleClothesContainerClick} id="bottom">
            {closetImg['bottom'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['bottom']} id="bottom" />
            ) : (
              <h2 className={classes.clothesText} id="bottom">
                하의👖
              </h2>
            )}
          </div>
          <div className={classes.shoesContainer} onClick={handleClothesContainerClick} id="shoes">
            {closetImg['shoes'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['shoes']} id="shoes" />
            ) : (
              <h2 className={classes.clothesText} id="shoes">
                신발👟
              </h2>
            )}
          </div>
        </div>
        <div className={classes.rightClothesContainer}>
          <div elevation={4} className={classes.bagContainer} onClick={handleClothesContainerClick} id="bag">
            {closetImg['bag'] ? (
              <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['bag']} id="bag" />
            ) : (
              <h2 className={classes.clothesText} id="bag">
                가방🎒
              </h2>
            )}
          </div>
        </div>
      </Paper>

      <div>
        <Paper elevation={4} className={classes.closetPriceBox}>
          {'총 금액💰 : '} {clothesPrice.hat + clothesPrice.top + clothesPrice.bottom + clothesPrice.shoes + clothesPrice.bag}\
        </Paper>
      </div>

      <div className={classes.closetTextContainer}>
        <TextField
          placeholder="ex) 데이트, 동창회, 가족 모임 등"
          label="이 패션의 TPO💬"
          value={closetText}
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

        <Paper
          elevation={4}
          className={classes.makeLookBookBtn}
          onClick={() => {
            if (closetClothesId['hat'] || closetClothesId['top'] || closetClothesId['bottom'] || closetClothesId['shoes'] || closetClothesId['bag']) {
              history.push('/closet/look_book');
            }
          }}
        >
          {'LOOKBOOK\n    만들기📸'}
        </Paper>
      </div>
    </div>
  );
}

export default Closet;
