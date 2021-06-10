import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useHistory } from 'react-router';

// import { ModalContext } from '../../';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '56px',
    // // justifyContent: 'center',
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
    // height: '70vh',
    flexWrap: 'wrap',
    alignItems: 'center',
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
    height: '230px',
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
  titleText: {
    fontFamily: 'GmarketSansMedium',
  },
}));

export default function MyPageList(props) {
  const classes = useStyles();
  const history = useHistory();

  //   const [myPageListInfo, setMyPageListInfo] = useState([]);

  //   useEffect(() => {
  //     try {
  //       axios.get(props.apiUrl, {}).then((res) => {
  //         setMyPageListInfo(res.data);
  //       });
  //     } catch (err) {
  //       history.push('/error');
  //       console.log(err);
  //     }
  //   }, []);

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
    history.push(props.lookBookUrl + seq);
  };

  return (
    <div className={classes.root} id="scrollableDiv">
      <TopComment comment={props.myPageListTitle} />
      {/* <InfiniteScroll
        className={classes.closetListContainer}
        dataLength={a.length}
        next={() => scrollToEnd()}
        hasMore={true}
        loader={<h3 style={{ textAlign: 'center' }}>Loading...</h3>}
        scrollableTarget="scrollableDiv"
      > */}
      <div className={classes.closetListContainer}>
        {Array.isArray(props.myPageListInfo) &&
          props.myPageListInfo.map(function (item, i) {
            return (
              <Paper elevation={4} className={classes.individualClosetContainer} onClick={handleLookBookClick}>
                <div className={classes.thumbnailBox}>
                  <img className={classes.thumbnail} alt={item.id} src={item.url} />
                </div>
                {item.tpo ? (
                  <div className={classes.titleText}>{item.tpo.slice(0, 13)}...</div>
                ) : (
                  <div className={classes.titleText}>{i + 1}번 룩북</div>
                )}
                {item['ok'] > 5 && item['ok'] > item['no'] * 2 && (
                  <img className={classes.confirmedThumb} src="/images/myPage/confirmed_thumb.png" alt="confirmed" />
                )}
                {item['ok'] > 5 && item['no'] * 2 > item['ok'] && (
                  <img className={classes.confirmedThumb} src="/images/myPage/confirmed_thumb_down.png" alt="notConfirmed" />
                )}
                {(item['ok'] < 1 && item['no'] < 1) || item['ok'] === item['no'] || item['ok'] < 5 ? (
                  <img className={classes.confirmedThumb} src="/images/myPage/question.png" alt="confirmed" />
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
