import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroll-component';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import GroupSelector from './groupSelector';
import { useSelector, useDispatch } from 'react-redux';
import { closetModalOpen, closetModalMode } from '../../actions';

import { ModalContext } from '../../App';
import { ClothesIdContext } from '../../App';
import { ClothesPriceContext } from '../../App';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // // flexDirection: 'column',
    // alignItems: 'center',
    // // width: '100px',
    // // maxWidth: '1024px',
    // // minHeight: ' calc(100vh - 8.5rem)',
    // // backgroundColor: '#ececec',
    // // height: '80vw',
    fontFamily: 'GmarketSansMedium',

    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '66px',
    // // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  modal: {
    backgroundColor: 'white',
    maxWidth: '350px',
    // minWidth: '340px',
    // minHeight: '73vh',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column',
    // marginTop: '50px',
    border: 'solid 3px',
    borderRadius: '15px',
    // overflow: 'auto',
  },
  modalCloseBtn: {
    // width: '25px',
    // height: '25px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  modalTopContents: {
    display: 'flex',
    justifyContent: 'center',
  },
  hiddenBtn: {
    visibility: 'hidden',
    width: '25px',
    height: '25px',
  },
  modalBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  modalBottomContent: {
    display: 'flex',
    flexDirection: 'column',
    // overflow: 'auto',
    height: '62vh',
    marginTop: '28px',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  box: { overflow: 'auto', width: '100%' },

  modalClothesContainer: {
    display: 'flex',
    width: '100vw',
    maxWidth: '350px',
    // height: '70vh',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '20px',
    justifyContent: 'center',
    // width: '100%',
    // flexDirection: 'column',
  },
  individualClothesContainer: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // border: 'solid 2px',
    fontSize: '18px',
    width: '160px',
    height: '300px',
    margin: '5px',
  },
  modalImg: {
    display: 'flex',

    width: '100%',
    height: '100%',
  },
  clothesThumbnailBox: {
    display: 'flex',
    justifyContent: 'center',

    width: '160px',
    height: '160px',
    marginBottom: '5px',
  },
  clothesInfoBox: {
    flexWrap: 'wrap',
    marginLeft: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
  },
}));

export default function ClosetModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.closetModal.open);
  const mode = useSelector((state) => state.closetModal.mode);

  // const { openClosetModal, setOpenClosetModal } = useContext(ModalContext);
  // const { modalMode, setModalMode } = useContext(ModalContext);
  // const { closetImg, setClosetImg } = useContext(ModalContext);
  // const { clothesList, setClothesList } = useContext(ModalContext);
  // const { condition, setCondition } = useContext(ModalContext);
  // const [filteredClothes, setFilteredClothes] = useState({});
  const PAGE_NUMBER = 1;

  // const { openClosetModal, setOpenClosetModal } = useContext(ModalContext);
  // const { modalMode, setModalMode } = useContext(ModalContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);
  const { closetClothesId, setClosetClothesId } = useContext(ClothesIdContext);
  const [clothesList, setClothesList] = useState([]);
  const { condition, setCondition } = useContext(ModalContext);
  const [filteredClothes] = useState({});
  const [page, setPage] = useState(PAGE_NUMBER);
  const { clothesPrice, setClothesPrice } = useContext(ClothesPriceContext);

  // const [lastClothesId, setLastClothesId] = useState('1');

  const history = useHistory();
  useEffect(() => {
    try {
      axios
        .get(
          `https://muindoooapi.azurewebsites.net/looks/items?middlecategory=${condition.middleCategory}&subcategory=${condition.subCategory}&brand=${condition.brand}&type=${mode}&page=1`,
        )
        .then((res) => {
          setClothesList(res.data);
        });
    } catch (err) {
      console.log(err);
      history.push('/error');
    }
  }, [mode, condition, history, setClothesList]);

  // const setLastId = () => {
  //   // if (clothesList.length !== 0) {
  //   //   setLastClothesId(clothesList[clothesList.length - 1]['id']);
  //   // }
  //   // console.log(lastClothesId);
  //   setPage(page + 1);
  // };
  useEffect(() => {
    setPage((p) => p + 1);
  }, [clothesList, condition]);

  const scrollToEnd = () => {
    setTimeout(() => {
      axios
        .get(
          `https://muindoooapi.azurewebsites.net/looks/items?middlecategory=${condition.middleCategory}&subcategory=${condition.subCategory}&brand=${condition.brand}&type=${mode}&page=${page}`,
        )
        .then((res) => {
          setClothesList([...clothesList, ...res.data]);
        })
        .catch((err) => {
          console.log(err);
          // history.push('/error');
        });
    }, 1000);
  };
  const handleClose = () => {
    setClothesList([]);
    // setModalMode('');
    // setLastClothesId('1');
    // setOpenClosetModal(false);
    dispatch(closetModalMode(''));
    dispatch(closetModalOpen(false));

    var newCondition = { ...condition };
    newCondition['middleCategory'] = '';
    newCondition['subCategory'] = '';
    newCondition['brand'] = '';
    // setConditionNum(10000);
    setCondition(newCondition);
  };

  const handleImageSelect = (event) => {
    setClosetImg({
      ...closetImg,
      [mode]: event.target.src,
    });
    setClosetClothesId({ ...closetClothesId, [mode]: event.target.alt });
    setClothesPrice({ ...clothesPrice, [mode]: parseInt(event.target['title']) });
    // var selectedClothesPrice = parseInt(event.target['title']);
    // var newPrice = clothesPrice + selectedClothesPrice;
    // setClothesPrice(newPrice);
    setPage(0);

    handleClose();
  };

  return (
    <div>
      <Modal
        className={classes.root}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 750,
        }}
      >
        <Fade in={open}>
          <div className={classes.modal}>
            <div className={classes.modalTopContents}>
              <div className={classes.modalBtnContainer}>
                <GroupSelector />
              </div>
            </div>

            {mode ? (
              <div className={classes.modalBottomContent}>
                <div className={classes.box} id="scrollableDiv">
                  <InfiniteScroll
                    className={classes.modalClothesContainer}
                    dataLength={clothesList.length}
                    next={() => scrollToEnd()}
                    hasMore={true}
                    loader={<h1 style={{ textAlign: 'center' }}>Loading...</h1>}
                    scrollableTarget="scrollableDiv"
                  >
                    {Array.isArray(clothesList) &&
                      clothesList.map(function (image, i) {
                        return (
                          <Paper elevation={4} key={i} className={classes.individualClothesContainer}>
                            <div className={classes.clothesThumbnailBox}>
                              <img
                                className={classes.modalImg}
                                alt={clothesList[i]['id']}
                                title={clothesList[i]['price']}
                                src={clothesList[i]['url']}
                                onClick={handleImageSelect}
                              />
                            </div>
                            <div className={classes.clothesInfoBox}>
                              <a
                                href={clothesList[i]['musinsa']}
                                target="_blank"
                                style={{ color: '#6C49B8', textDecoration: 'none' }}
                                title="무신사에서 상품 보기"
                                rel="noreferrer"
                              >
                                <div style={{ fontSize: '14px', marginLeft: '6px' }}>{clothesList[i]['brand']}</div>
                                <div style={{ fontSize: '16px', marginLeft: '6px' }}>{clothesList[i]['name'].slice(0, 15)}...</div>
                                <div style={{ fontSize: '14px', marginLeft: '6px' }}>{clothesList[i]['price']}\</div>
                              </a>
                            </div>
                          </Paper>
                        );
                      })}

                    {filteredClothes.length === 0 ? <div>결과가 없습니다</div> : <></>}
                  </InfiniteScroll>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className={classes.modalCloseBtn}>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
