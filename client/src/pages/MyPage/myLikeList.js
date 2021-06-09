import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import styled from 'styled-components';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';

import { ModalContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '56px',
    flexDirection: 'column',
    alignItems: 'center',
    // overflow: 'auto',
    height: '100vh',
  },

  // box: { overflow: 'auto' },
  closetListContainer: {
    display: 'flex',
    width: '100vw',
    maxWidth: '350px',
    flexWrap: 'wrap',
    alignItems: 'center',
    // marginTop: '10px',
    justifyContent: 'center',
    paddingBottom: '56px',
  },
  individualClosetContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    // border: 'solid 2px',
    fontSize: '11px',
    width: '40%',
    height: '210px',
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
  confirmedThumb: {
    width: '20px',
    margin: '5px 0px',
  },
}));

export default function MyPageLikeList() {
  const classes = useStyles();
  const history = useHistory();
  const PAGE_NUMBER = 1;
  const [page, setPage] = useState(PAGE_NUMBER);
  // const { seq } = useParams();
  const [myLikeListInfo, setMyLikeListInfo] = useState([]);

  // const [a, setA] = useState([]);
  const [lookBookId, setLookBookId] = useState('');

  useEffect(() => {
    try {
      axios
        .get(`http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/mypage/thumbs`, {
          // headers: {
          //   Authorization:
          //     'Bearer ' +
          //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNjIyODMyODkxLCJqdGkiOiI5ODQ3YmIyOC1kNTg3LTQ1ZmEtOTE1Yi1iMjIwNTI1OTFiNzAiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxMCwibmJmIjoxNjIyODMyODkxLCJleHAiOjE2MjU0MjQ4OTF9.yp8IslBjQNWukhJ6FzJ4q0H31rWzSqg2XMwAJ95038k',
          // },
        })
        .then((res) => {
          setMyLikeListInfo(res.data);
        });
    } catch (err) {
      history.push('/error');
      console.log(err);
    }
    // return clothesList;
  }, []);
  // const scrollToEnd = () => {
  //   console.log('마지막');
  //   setTimeout(() => {
  //     setPage(page + 1);
  //     axios
  //       .get(`http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/mypage/my-looks`, {
  //         headers: { Authorization: 'Bearer ' + window.localStorage.token },
  //       })
  //       .then((res) => {
  //         setA([...a, ...res.data]);
  //       });
  //   }, 1000);
  // };

  // useEffect(() => {
  //   lookBookId && history.push(`/my_page_closet_detail/${lookBookId}`);
  // }, [lookBookId]);

  const handleLookBookClick = async (event) => {
    const seq = event.target.alt;
    history.push('/my_page_like_detail/' + seq);
  };

  console.log(window.localStorage.token);
  return (
    <div className={classes.root} id="scrollableDiv">
      <TopComment comment={'저장한 룩북 리스트'} />
      {/* <InfiniteScroll
        className={classes.closetListContainer}
        dataLength={a.length}
        next={() => scrollToEnd()}
        hasMore={true}
        loader={<h3 style={{ textAlign: 'center' }}>Loading...</h3>}
        scrollableTarget="scrollableDiv"
      > */}
      <div className={classes.closetListContainer}>
        {Array.isArray(myLikeListInfo) &&
          myLikeListInfo.map(function (item, i) {
            return (
              <Paper elevation={4} className={classes.individualClosetContainer} onClick={handleLookBookClick}>
                <div className={classes.thumbnailBox}>
                  <img className={classes.thumbnail} alt={myLikeListInfo[i]['id']} src={myLikeListInfo[i]['url']} />
                </div>
                {item['ok'] > item['no'] && <img className={classes.confirmedThumb} src="/images/myPage/confirmed_thumb.png" alt="sdgf" />}
                {item['no'] > item['ok'] && <img className={classes.confirmedThumb} src="/images/myPage/confirmed_thumb_down.png" alt="sdgf" />}
                {(item['ok'] < 1 && item['no'] < 1) || item['ok'] === item['no'] ? (
                  <img className={classes.confirmedThumb} src="/images/myPage/question.png" alt="sdgf" />
                ) : (
                  <div></div>
                )}
              </Paper>
            );
          })}
      </div>
      {/* </InfiniteScroll> */}
    </div>
  );
}
