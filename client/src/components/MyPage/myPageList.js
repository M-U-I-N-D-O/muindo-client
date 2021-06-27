import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '56px',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  closetListContainer: {
    display: 'flex',
    width: '100vw',
    maxWidth: '350px',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '56px',
  },
  individualClosetContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
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

  const handleLookBookClick = async (event) => {
    const seq = event.target.alt;
    history.push(props.lookBookUrl + seq);
  };

  return (
    <div className={classes.root} id="scrollableDiv">
      <TopComment comment={props.myPageListTitle} />
      <div className={classes.closetListContainer}>
        {Array.isArray(props.myPageListInfo) &&
          props.myPageListInfo.map(function (item, i) {
            return (
              <Paper key={i} elevation={4} className={classes.individualClosetContainer} onClick={handleLookBookClick}>
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
                {(item['ok'] < 1 && item['no'] < 1) || (item['ok'] <= 5 && item['ok'] === item['no']) || item['ok'] <= 5 ? (
                  <img className={classes.confirmedThumb} src="/images/myPage/question.png" alt="confirmed" />
                ) : (
                  <div></div>
                )}
              </Paper>
            );
          })}
      </div>
    </div>
  );
}
