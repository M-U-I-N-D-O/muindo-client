import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import styled from 'styled-components';
import MyClosetInfo from '../../components/MyPage/myClosetInfoModal';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useHistory } from 'react-router';

import { ModalContext } from '../../App';
// import { ModalContext } from '../../';

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

    overflow: 'auto',
    height: '100vh',
  },

  // closetThumbnail: {
  //   // backgroundColor: '#ced3e3',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: '340px',
  //   border: 'solid 4px',
  //   // height: '380px',
  //   position: 'relative',
  //   marginTop: '20px',

  //   flexDirection: 'column',
  //   // overflow: 'auto',
  //   height: '100vh',

  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  // },
  box: { overflow: 'auto' },
  closetListContainer: {
    display: 'flex',
    width: '100vw',
    maxWidth: '350px',
    // height: '70vh',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '10px',
    justifyContent: 'center',
    paddingBottom: '56px',

    // width: '100%',
    // flexDirection: 'column',
  },
  individualClosetContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: 'solid 2px',
    fontSize: '11px',
    minHeight: '180px',
    width: '40%',
    // height: '200px',
    margin: '15px',
  },

  thumbnailBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '180px',
  },
  thumbnail: {
    display: 'flex',

    width: '100%',
    height: '100%',
  },
}));

export default function MyPageClosetList() {
  const classes = useStyles();
  const history = useHistory();
  const PAGE_NUMBER = 1;
  const [page, setPage] = useState(PAGE_NUMBER);
  // const { seq } = useParams();

  const [a, setA] = useState([]);
  const [lookBookId, setLookBookId] = useState('');

  useEffect(() => {
    try {
      axios
        .get(`http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/mypage/my-looks`, {
          headers: {
            Authorization: 'Bearer ' + window.localStorage.token,
          },
        })
        .then((res) => {
          setA(res.data);
        });
    } catch (err) {
      console.log(err);
    }
    // return clothesList;
  }, []);

  const scrollToEnd = () => {
    console.log('마지막');
    setTimeout(() => {
      setPage(page + 1);
      axios
        .get(`http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/mypage/my-looks`, {
          headers: { Authorization: 'Bearer ' + window.localStorage.token },
        })
        .then((res) => {
          setA([...a, ...res.data]);
        });
    }, 1000);
  };

  // useEffect(() => {
  //   lookBookId && history.push(`/my_page_closet_detail/${lookBookId}`);
  // }, [lookBookId]);

  const handleLookBookClick = async (event) => {
    // console.log(event.target.alt);
    const seq = event.target.alt;
    // await setLookBookId(() => {
    //   return event.target.alt;
    // });
    // console.log(lookBookId);
    history.push('/my_page_closet_detail/' + seq);
  };

  console.log(a);
  console.log(window.localStorage.token);
  return (
    <div className={classes.root} id="scrollableDiv">
      <TopComment comment={'내 옷장 보기'} />
      {/* <div className={classes.closetThumbnail}> */}
      {/* <div className={classes.box} > */}
      <InfiniteScroll
        className={classes.closetListContainer}
        dataLength={a.length}
        next={() => scrollToEnd()}
        hasMore={true}
        loader={<h3 style={{ textAlign: 'center' }}>Loading...</h3>}
        scrollableTarget="scrollableDiv"
      >
        {Array.isArray(a) &&
          a.map(function (image, i) {
            return (
              // <Link to={'/my_page_closet_detail/' + seq} className={classes.individualClosetContainer} onClick={handleLookBookClick}>
              <div className={classes.individualClosetContainer} onClick={handleLookBookClick}>
                <div className={classes.thumbnailBox}>
                  <img className={classes.thumbnail} alt={a[i]['id']} src={a[i]['url']} />
                </div>
                {image['id']}

                {/* <a href={a[i]['shop_url']} target="_blank" title="무신사에서 상품 보기" rel="noreferrer">
                  <div>{a[i]['brand']}</div>
                  <div>{a[i]['item_name']}</div>
                  <div>{a[i]['price']}</div>
                </a> */}
              </div>
            );
          })}
      </InfiniteScroll>
    </div>
    // </div>
    // </div>
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
