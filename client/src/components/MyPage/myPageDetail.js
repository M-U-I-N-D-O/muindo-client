import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import styled from 'styled-components';
import MyClosetInfo from '../../components/MyPage/myClosetInfoModal';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';

import { ModalContext } from '../../App';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '56px',
    flexDirection: 'column',
    alignItems: 'center',
  },

  closetContainer: {
    display: 'flex',
    width: '340px',
    border: 'solid 4px',
    height: '380px',
    // marginTop: '20px',
    position: 'relative',
  },
  likeNoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '325px',
    height: '100px',
    marginTop: '15px',
  },
  likeNoBox: {
    width: '143px',
    border: 'solid 3.5px',
    height: '80px',
  },
  likeNoTitleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    height: '50%',
    borderBottom: 'solid 3px',
  },
  likeNoCountBox: {
    display: 'flex',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
  },

  lookBookInfoBtnContainer: {
    display: 'flex',
    width: '325px',
    height: '70px',
    marginTop: '5px',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    justifyContent: 'space-around',
  },
  // listBtn: {
  //   display: 'flex',
  //   width: '130px',
  //   height: '40px',

  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  //   border: 'solid 4px',
  // },
  confirmLink: {
    marginTop: '10px',
    marginBottom: '20px',
    fontSize: '12px',
  },
  myLookBookImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  confirmedThumb: {
    zIndex: 100,
    position: 'absolute',
    width: '50px',

    top: '16px',
    right: '24px',
  },
  confirmedText: {
    zIndex: 100,
    position: 'absolute',
    width: '50px',
    fontSize: '12px',
    top: '70px',
    right: '38px',
    color: 'red',
  },
  lookBookBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'pre-wrap',
    border: 'solid 2px',
    width: '150px',
    height: '60px',
    marginTop: '25px',
  },
  shareBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'pre-wrap',

    fontSize: '15px',
    width: '90px',
    height: '40px',
    fontFamily: 'GmarketSansMedium',
  },
  listBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    width: '90px',
    height: '40px',
    fontFamily: 'GmarketSansMedium',
  },
  restartBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    width: '90px',
    height: '40px',
    fontFamily: 'GmarketSansMedium',
  },
  ectBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '35px',
    marginBottom: '55px',
    width: '330px',
  },
  closetTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25px',
    width: '330px',
    height: '55px',
  },
  closetTextBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'GmarketSansMedium',
    fontSize: '18px',

    width: '310px',
    height: '55px',
    overflow: 'auto',
  },
}));

export default function MyPageDetail(props) {
  const classes = useStyles();
  const history = useHistory();
  const { openClosetInfoModal, setOpenClosetInfoModal } = useContext(ModalContext);
  //   const { seq } = useParams();
  //   const { closetDetailInfo, setClosetDetailInfo } = useContext(ModalContext);
  const [shareAnchor, setShareAnchor] = useState(null);

  //   const [myLookBookInfo, setMyLookBookInfo] = useState([]);
  //   const [lookBookPrice, setLookBookPrice] = useState(0);

  //   useEffect(() => {
  //     try {
  //       axios
  //         .get(`http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/mypage/my-looks/${seq}`, {
  //           // headers: {
  //           //   Authorization:
  //           //     'Bearer ' +
  //           //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNjIyODMyODkxLCJqdGkiOiI5ODQ3YmIyOC1kNTg3LTQ1ZmEtOTE1Yi1iMjIwNTI1OTFiNzAiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxMCwibmJmIjoxNjIyODMyODkxLCJleHAiOjE2MjU0MjQ4OTF9.yp8IslBjQNWukhJ6FzJ4q0H31rWzSqg2XMwAJ95038k',
  //           // },
  //         })
  //         .then((res) => {
  //           const detailInfoArr = [];
  //           detailInfoArr.push(res.data.hat, res.data.top, res.data.bottom, res.data.shoes, res.data.bag);
  //           console.log(detailInfoArr);

  //           const notNulDetailInfoArr = [];
  //           for (var i = 0; i < detailInfoArr.length; i++) {
  //             if (detailInfoArr[i] !== null) {
  //               notNulDetailInfoArr.push(detailInfoArr[i]);
  //             }
  //           }
  //           console.log(notNulDetailInfoArr);

  //           var clothesPrice = 0;
  //           for (var m = 0; m < notNulDetailInfoArr.length; m++) {
  //             clothesPrice += parseInt(notNulDetailInfoArr[m]['price']);
  //           }
  //           setLookBookPrice(clothesPrice);
  //           setClosetDetailInfo(notNulDetailInfoArr);
  //           setMyLookBookInfo(res.data.my_look);
  //         });
  //     } catch (err) {
  //       history.push('/error');
  //       console.log(err);
  //     }
  //   }, []);

  //   console.log(lookBookPrice);

  const handleOpenClosetModalClick = () => {
    setOpenClosetInfoModal(true);
  };
  const handleShareClick = (event) => {
    setShareAnchor(event.currentTarget);
  };

  const handleShareClose = () => {
    setShareAnchor(null);
  };

  const handleImageDownloadClick = async () => {
    setShareAnchor(null);
  };
  const shareByKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
        console.log(window.Kakao.isInitialized());
      }
      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: 'MUINDO에서 만든 룩북이 도착했어요!',
          description: '무지하게 패션 인싸 되고 싶은 사람들\n도와주는 곳, MUINDO',
          imageUrl: 'https://ifh.cc/g/6R44lA.png',
          link: {
            // mobileWebUrl: `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:7357/my_page_closet_detail/${seq}`,
            // webUrl: `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:7357/my_page_closet_detail/${seq}`,
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },

        buttons: [
          {
            title: '나도 룩북 만들기',
            link: {
              mobileWebUrl: `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:7357`,
              webUrl: `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:7357`,
            },
          },
        ],
      });
    }
  };

  return (
    <div className={classes.root}>
      <MyClosetInfo price={props.lookBookPrice} />
      <TopComment comment={'나의 룩북'} />

      <Paper elevation={4} className={classes.closetContainer}>
        <img className={classes.myLookBookImg} src={props.myLookBookInfo['url']} alt="" />
        <div>
          {props.myLookBookInfo['ok'] > 5 && props.myLookBookInfo['ok'] > props.myLookBookInfo['no'] * 2 && (
            <div>
              <img className={classes.confirmedThumb} src="/images/myPage/confirmed_thumb.png" alt="confirmed" />
              <span className={classes.confirmedText}>Confirmed!</span>
            </div>
          )}
        </div>
      </Paper>
      {props.myLookBookInfo['tpo'] !== null && (
        <div className={classes.closetTextContainer}>
          <Paper elevation={4} className={classes.closetTextBox}>
            {props.myLookBookInfo['tpo']}
          </Paper>
        </div>
      )}

      <div className={classes.likeNoContainer}>
        <Paper elevation={4} className={classes.likeNoBox}>
          <div className={classes.likeNoTitleBox}>Confirm✔</div>
          <div className={classes.likeNoCountBox}>{props.myLookBookInfo['ok']}</div>
        </Paper>
        <Paper elevation={4} className={classes.likeNoBox}>
          <div className={classes.likeNoTitleBox}>Nope❌</div>
          <div className={classes.likeNoCountBox}>{props.myLookBookInfo['no']}</div>
        </Paper>
      </div>

      <div className={classes.lookBookInfoBtnContainer}>
        {/* <LuxuryBtn2 onClick={handleOpenClosetModalClick}>{'LookBook \n 정보보기'}</LuxuryBtn2>{' '} */}
        <Paper elevation={4} className={classes.lookBookBtn} onClick={handleOpenClosetModalClick}>
          {' LookBook \n 정보보기📃'}
        </Paper>{' '}
      </div>

      <div className={classes.ectBtnContainer}>
        {/* <LuxuryBtn1 className={classes.shareBtn} onClick={handleShareClick}>
          {'공유하기'}
        </LuxuryBtn1> */}
        <Paper elevation={4} className={classes.shareBtn} onClick={handleImageDownloadClick}>
          <a href={props.myLookBookInfo['url']} style={{ color: '#000000', textDecoration: 'none' }}>
            {' 이미지 \n다운로드'}
          </a>
        </Paper>
        {/* <Menu
          id="simple-menu"
          anchorEl={shareAnchor}
          getContentAnchorEl={null | undefined}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          keepMounted
          open={Boolean(shareAnchor)}
          onClose={handleShareClose}
        >
          <a href={props.myLookBookInfo['url']} style={{ color: '#000000', textDecoration: 'none' }}>
            <MenuItem onClick={handleImageDownloadClick}>이미지 다운로드 </MenuItem>
          </a>
          <Helmet>
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
          </Helmet>

          <MenuItem onClick={shareByKakao}>카카오톡 공유하기</MenuItem>
        </Menu> */}

        {/* <LuxuryBtn1
          className={classes.shareBtn}
          onClick={() => {
            history.push('/my_page_closet_list');
          }}
        >
          목록으로
        </LuxuryBtn1> */}
        <Paper
          elevation={4}
          className={classes.listBtn}
          onClick={() => {
            history.push(props.goToListPath);
          }}
        >
          목록으로
        </Paper>
        {/* <LuxuryBtn1
          className={classes.shareBtn}
          onClick={() => {
            history.push('/closet');
            setClosetClothesId({
              hat: '',
              top: '',
              bottom: '',
              shoes: '',
              bag: '',
            });
          }}
        >
          {'다시 \n 만들기'}
        </LuxuryBtn1> */}
        <Paper
          elevation={4}
          className={classes.restartBtn}
          onClick={() => {
            history.push('/closet');
            // setClosetClothesId({
            //   hat: '',
            //   top: '',
            //   bottom: '',
            //   shoes: '',
            //   bag: '',
            // });
          }}
        >
          {props.page === 'myClosetDetail' ? '다시 \n 만들기' : '나도 \n 컨펌받기'}
        </Paper>
      </div>

      {/* <a href="/solution" className={classes.confirmLink} style={{ color: '#000' }} target="_blank" rel="noreferrer">
        컨펌을 못 받으셨나요?
      </a> */}
      {}
    </div>
  );
}
