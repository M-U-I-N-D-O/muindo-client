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
// import { ModalContext } from '../../data/confirmed_star.png';
import { ClothesIdContext } from '../../App';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import html2canvas from 'html2canvas';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '56px',
    // // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  closetContainer: {
    // backgroundColor: '#ced3e3',
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '340px',
    border: 'solid 4px',
    height: '380px',
    // position: 'relative',
    marginTop: '20px',
    position: 'relative',
  },
  likeNoContainer: {
    // backgroundColor: '#ced3e3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '325px',
    // border: 'solid 4px',
    height: '100px',
    marginTop: '10px',
  },
  likeNoBox: {
    width: '143px',
    border: 'solid 4px',
    height: '80px',
  },
  likeNoTitleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    height: '50%',
    borderBottom: 'solid 4px',
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
    // border: 'solid 4px',
    height: '70px',
    marginTop: '5px',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    justifyContent: 'space-around',

    // border: 'solid 4px',
  },
  listBtn: {
    display: 'flex',
    width: '130px',
    height: '40px',

    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    border: 'solid 4px',
  },
  confirmLink: {
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '12px',
  },
  myLookBookImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  confirmedStar: {
    zIndex: 100,
    position: 'absolute',
    width: '60px',

    top: '8px',
    right: '15px',
  },
  confirmedText: {
    zIndex: 100,
    position: 'absolute',
    width: '50px',
    fontSize: '13px',
    top: '70px',
    right: '42px',
    color: 'red',
  },
  shareBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
  },
  ectBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '15px',
    marginBottom: '15px',
    width: '325px',
  },
}));

export default function MyPageClosetDetail() {
  const classes = useStyles();
  const history = useHistory();
  const { openClosetInfoModal, setOpenClosetInfoModal } = useContext(ModalContext);
  const { seq } = useParams();
  const { closetDetailInfo, setClosetDetailInfo } = useContext(ModalContext);
  const [shareAnchor, setShareAnchor] = useState(null);

  const [myLookBookInfo, setMyLookBookInfo] = useState([]);
  const { closetClothesId, setClosetClothesId } = useContext(ClothesIdContext);

  useEffect(() => {
    try {
      axios
        .get(`http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/mypage/my-looks/${seq}`, {
          headers: {
            Authorization:
              'Bearer ' +
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNjIyODMyODkxLCJqdGkiOiI5ODQ3YmIyOC1kNTg3LTQ1ZmEtOTE1Yi1iMjIwNTI1OTFiNzAiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxMCwibmJmIjoxNjIyODMyODkxLCJleHAiOjE2MjU0MjQ4OTF9.yp8IslBjQNWukhJ6FzJ4q0H31rWzSqg2XMwAJ95038k',
          },
        })
        .then((res) => {
          const arr1 = [];
          arr1.push(res.data.hat, res.data.top, res.data.bottom, res.data.shoes, res.data.bag);
          console.log(arr1);

          const arr2 = [];
          for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== null) {
              // console.log(arr1[i]);
              arr2.push(arr1[i]);
            }
          }
          console.log(arr2);

          setClosetDetailInfo(arr2);
          setMyLookBookInfo(res.data.my_look);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
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
          // imageUrl: 'https://ifh.cc/g/pXhGOy.jpg',
          // imageUrl: 'https://ifh.cc/g/GKUPxC.png',
          imageUrl: 'https://ifh.cc/g/6R44lA.png',
          link: {
            mobileWebUrl: 'http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com',
            webUrl: 'http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com',
          },
        },

        buttons: [
          {
            title: '나도 룩북 만들기',
            link: {
              mobileWebUrl: 'http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com',
              webUrl: 'http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com',
            },
          },
        ],
      });
    }
  };

  return (
    <div className={classes.root}>
      <MyClosetInfo />
      <div className={classes.closetContainer}>
        <img className={classes.myLookBookImg} src={myLookBookInfo['url']} alt="aaa" />
        <div>
          <img className={classes.confirmedStar} src="/images/confirmed_thumb.png" alt="sdgf" />{' '}
          <span className={classes.confirmedText}>Confirmed!</span>
        </div>
      </div>
      <div className={classes.likeNoContainer}>
        <div className={classes.likeNoBox}>
          <div className={classes.likeNoTitleBox}>Like</div>
          <div className={classes.likeNoCountBox}>{myLookBookInfo['ok']}</div>
        </div>
        <div className={classes.likeNoBox}>
          <div className={classes.likeNoTitleBox}>NoNo</div>
          <div className={classes.likeNoCountBox}>{myLookBookInfo['no']}</div>
        </div>
      </div>

      <div className={classes.lookBookInfoBtnContainer}>
        <LuxuryBtn2 onClick={handleOpenClosetModalClick}>{'LookBook \n 정보보기'}</LuxuryBtn2>{' '}
      </div>

      <div className={classes.ectBtnContainer}>
        <div className={classes.shareBtn} onClick={handleShareClick}>
          {'공유하기'}
        </div>
        <Menu
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
          <a href={myLookBookInfo['url']} style={{ color: '#000000', textDecoration: 'none' }}>
            <MenuItem onClick={handleImageDownloadClick}>이미지 다운로드 </MenuItem>
          </a>
          <Helmet>
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
          </Helmet>

          <MenuItem onClick={shareByKakao}>카카오톡 공유하기</MenuItem>
        </Menu>

        <div
          className={classes.shareBtn}
          onClick={() => {
            history.push('/my_page_closet_list');
          }}
        >
          목록으로
        </div>
        <div
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
          다시 만들기
        </div>
      </div>

      <a href="/solution" className={classes.confirmLink} style={{ color: '#000' }} target="_blank" rel="noreferrer">
        컨펌을 못 받으셨나요?
      </a>
      {}
    </div>
  );
}

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  height: 45px;
  width: 140px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 800;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: black;
  border-radius: 0;
  /* padding: 15px 20px 15px 20px; */
  transition: all 0.25s ease-out;
  cursor: pointer;
  white-space: pre-wrap;
  text-align: center;
  /* background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0)); */
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  /* margin: 15px 5px 15px; */
  border-bottom: 4px solid;
  :hover {
    color: black;
    border: 7px solid;
    /* color: $white; */
    /* background-position: 99% 50%; */
  }
  :disabled {
    /* background-position: 1% 50%; */
    /* color: rgba(223, 190, 106, 0.7); */
    color: gray;
    border: 1px solid;
    cursor: default;
  }
`;

const LuxuryBtn2 = styled.button`
  display: inline-block;
  box-sizing: border-box;
  /* max-width: 150px;
  min-width: 130px; */
  height: 60px;
  width: 140px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 800;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: black;
  border-radius: 0;
  /* padding: 15px 20px 15px 20px; */
  transition: all 0.25s ease-out;
  cursor: pointer;
  white-space: pre-wrap;
  text-align: center;
  /* background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0)); */
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  /* margin: 15px 5px 15px; */
  border: 4px solid;
  :hover {
    color: black;
    border: 7px solid;
    /* color: $white; */
    /* background-position: 99% 50%; */
  }
  :disabled {
    /* background-position: 1% 50%; */
    /* color: rgba(223, 190, 106, 0.7); */
    color: gray;
    border: 1px solid;
    cursor: default;
  }
`;
