import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import styled from 'styled-components';
import MyClosetInfo from '../../components/MyPage/myClosetInfoModal';
import axios from 'axios';
import { useHistory } from 'react-router';

import { ModalContext } from '../../App';
// import { ModalContext } from '../../data/confirmed_star.png';

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

  listBtnContainer: {
    display: 'flex',
    width: '325px',
    // border: 'solid 4px',
    height: '70px',
    marginTop: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
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
    width: '75px',

    top: '8px',
    right: '25px',
  },
  confirmedText: {
    zIndex: 100,
    position: 'absolute',
    width: '50px',
    fontSize: '16px',
    top: '92px',
    right: '67px',
    color: 'red',
  },
}));

export default function MyPageClosetDetail() {
  const classes = useStyles();
  const history = useHistory();
  const { openClosetInfoModal, setOpenClosetInfoModal } = useContext(ModalContext);
  const { seq } = useParams();

  const [myClosetLookBookImg, setMyClosetLookBookImg] = useState([]);
  const [a, setA] = useState([]);

  const handleOpenClosetModalClick = async (event) => {
    // setModalMode(event.target.id);
    // const res = await axios.post(
    //   `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/looks/upload`,
    //   {
    //     dataType: 'text',
    //     items: closetClothesId,
    //     data: {
    //       img: url,
    //     },
    //     success: function () {
    //       // seq = res['id'];
    //     },
    //   },

    //   { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + window.localStorage.token } },
    // );

    setOpenClosetInfoModal(true);
  };

  useEffect(() => {
    try {
      axios
        .get(`http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/mypage/my-looks/${seq}`, {
          headers: { Authorization: 'Bearer ' + window.localStorage.token },
        })
        .then((res) => {
          console.log(res);
          setA(res.data);
        });
    } catch (err) {
      console.log(err);
    }
    // return clothesList;
  }, []);
  console.log(a);
  console.log(seq);

  // useEffect(() => {
  //   try {
  //     axios.get('http://localhost:3000/data/closet.json').then((res) => {
  //       let result = res.data.data;
  //       // console.log(res.data.data['bag']);
  //       // console.log(typeof [1, 2, 3]);
  //       setMyClosetLookBookImg(res.data.data['hat']);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   return myClosetLookBookImg;
  // }, [myClosetLookBookImg]);

  // useEffect(async() => {
  //   try {
  //     axios.get(`http://elice-kdt-ai-track-vm-ai-12.koreacentral.cloudapp.azure.com:5000/looks/items?type=hat`).then((res) => {
  //       setMyClosetLookBookImg(res.data);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // return clothesList;
  // }, [myClosetLookBookImg]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get(`http://elice-kdt-ai-track-vm-ai-12.koreacentral.cloudapp.azure.com:5000/looks/items?type=hat`);
  //     setMyClosetLookBookImg(res.data);
  //   }
  //   fetchData();
  // }, []);

  // const handleInfoClick = () => {
  //   setInfoAnchor(true);
  // };
  // const handleInfoClose = () => {
  //   setInfoAnchor(null);
  // };

  return (
    <div className={classes.root}>
      <MyClosetInfo data={a} />
      <div className={classes.closetContainer}>
        {Array.isArray(myClosetLookBookImg) && <img className={classes.myLookBookImg} src={a['url']} alt="aaa" />}
        {/* <img className={classes.myLookBookImg} src="/images/closet/closet_bottom2.jpg" alt="aaa" /> */}
        {/* {a['ok'] > a['no'] * 2 && ( */}
        <div>
          <img className={classes.confirmedStar} src="/images/confirmed_thumb.png" alt="sdgf" />{' '}
          <span className={classes.confirmedText}>Confirmed!</span>
        </div>
        {/* )} */}
      </div>
      <div className={classes.likeNoContainer}>
        <div className={classes.likeNoBox}>
          <div className={classes.likeNoTitleBox}>Like</div>
          <div className={classes.likeNoCountBox}>{a['ok']}</div>
        </div>
        <div className={classes.likeNoBox}>
          <div className={classes.likeNoTitleBox}>NoNo</div>
          <div className={classes.likeNoCountBox}>{a['no']}</div>
        </div>
      </div>
      <div className={classes.listBtnContainer}>
        {/* <div className={classes.listBtn}> */}
        <LuxuryBtn
          onClick={() => {
            history.push('/my_page_closet_list');
          }}
        >
          목록으로
        </LuxuryBtn>

        {/* </div> */}
      </div>
      <div className={classes.bottomContents}>
        <LuxuryBtn2 onClick={handleOpenClosetModalClick}>{'LookBook \n 정보보기'}</LuxuryBtn2>
        {/* <Menu
          id="simple-menu"
          anchorEl={infoAnchor}
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
          open={Boolean(infoAnchor)}
          onClose={handleInfoClose}
        >
          <MenuItem onClick={handleOpenClosetModalClick}>옷 정보 보기</MenuItem>
          <MenuItem>컨펌을 못받으셨나요?</MenuItem>
        </Menu> */}
      </div>
      <a href="/solution" className={classes.confirmLink} style={{ color: '#000' }} target="_blank" rel="noreferrer">
        컨펌을 못 받으셨나요?
      </a>
    </div>
  );
}

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  /* max-width: 150px;
  min-width: 130px; */
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
