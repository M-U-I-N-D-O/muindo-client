import React, { useState, useEffect } from 'react';
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
import { closetModalOpen, closetModalMode, closetImg, closetPrice, closetId, categoryCondition } from '../../actions';
import url from '../../url';

axios.defaults.baseURL = url;

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'GmarketSansMedium',
    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '66px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    maxWidth: '350px',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column',
    border: 'solid 3px',
    borderRadius: '15px',
  },
  modalCloseBtn: {
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
    height: '62vh',
    marginTop: '28px',
    alignItems: 'center',
  },
  box: { overflow: 'auto', width: '100%' },
  modalClothesContainer: {
    display: 'flex',
    width: '100vw',
    maxWidth: '350px',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '20px',
    justifyContent: 'center',
  },
  individualClothesContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
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
  const img = useSelector((state) => state.closet.closetImage);
  const price = useSelector((state) => state.closet.closetPrice);
  const id = useSelector((state) => state.closet.closetId);
  const condition = useSelector((state) => state.closetModal.condition);

  const [clothesList, setClothesList] = useState([]);
  const [filteredClothes] = useState({});
  const PAGE_NUMBER = 1;
  const [page, setPage] = useState(PAGE_NUMBER);

  const history = useHistory();
  useEffect(() => {
    try {
      axios
        .get(
          `/looks/items?middlecategory=${condition.middleCategory}&subcategory=${condition.subCategory}&brand=${condition.brand}&type=${mode}&page=1`,
        )
        .then((res) => {
          setClothesList(res.data);
        });
    } catch (err) {
      console.log(err);
      history.push('/error');
    }
  }, [mode, condition, history, setClothesList]);

  useEffect(() => {
    setPage((p) => p + 1);
  }, [clothesList, condition]);

  const scrollToEnd = () => {
    setTimeout(() => {
      axios
        .get(
          `/looks/items?middlecategory=${condition.middleCategory}&subcategory=${condition.subCategory}&brand=${condition.brand}&type=${mode}&page=${page}`,
        )
        .then((res) => {
          setClothesList([...clothesList, ...res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  };

  const handleClose = () => {
    setClothesList([]);
    dispatch(closetModalMode(''));
    dispatch(closetModalOpen(false));
    var newCondition = { ...condition };
    newCondition['middleCategory'] = '';
    newCondition['subCategory'] = '';
    newCondition['brand'] = '';
    dispatch(categoryCondition(newCondition));
  };

  const handleImageSelect = (event) => {
    dispatch(closetImg({ ...img, [mode]: event.target.src }));
    dispatch(closetId({ ...id, [mode]: event.target.alt }));
    dispatch(closetPrice({ ...price, [mode]: parseInt(event.target['title']) }));
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
