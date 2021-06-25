import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import MyClosetInfo from '../../components/MyPage/myClosetInfoModal';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { infoModalOpen } from '../../actions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    marginBottom: '45px',
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
    fontSize: '16px',
    width: '320px',
    height: '55px',
    overflow: 'auto',
  },
  deleteBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'GmarketSansMedium',
    fontSize: '14px',
    width: '120px',
    height: '35px',
    marginBottom: '20px',
    color: 'red',
  },
}));

export default function MyPageDetail(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { seq } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenClosetModalClick = () => {
    dispatch(infoModalOpen(true));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleLookBookDelete = () => {
    try {
      axios.delete(`https://muindoooapi.azurewebsites.net/looks/remove/${seq}`).then(() => {
        setDialogOpen(false);
        console.log('Successfully Deleted Lookbook');
        history.push(props.goToListPath);
      });
    } catch (err) {
      console.log(err);
      history.push('/error');
    }
  };

  return (
    <div className={classes.root}>
      <MyClosetInfo price={props.lookBookPrice} />
      <TopComment comment={props.title} />

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
            <div style={{ margin: '8px' }}>{props.myLookBookInfo['tpo']}</div>
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
        <Paper elevation={4} className={classes.lookBookBtn} onClick={handleOpenClosetModalClick}>
          {' LookBook \n 정보보기📃'}
        </Paper>{' '}
      </div>

      <div className={classes.ectBtnContainer}>
        <Paper elevation={4} className={classes.shareBtn}>
          <a href={props.myLookBookInfo['url']} style={{ color: '#000000', textDecoration: 'none' }}>
            {' 이미지 \n다운로드'}
          </a>
        </Paper>
        <Paper
          elevation={4}
          className={classes.listBtn}
          onClick={() => {
            history.push(props.goToListPath);
          }}
        >
          목록으로
        </Paper>
        <Paper
          elevation={4}
          className={classes.restartBtn}
          onClick={() => {
            history.push('/closet');
          }}
        >
          {props.page === 'myClosetDetail' ? '다시 \n 만들기' : '나도 \n 컨펌받기'}
        </Paper>
      </div>
      {props.delete && (
        <>
          {' '}
          <Paper className={classes.deleteBtn} variant="outlined" onClick={handleDialogOpen}>
            룩북 삭제하기
          </Paper>
          <Dialog open={dialogOpen} onClose={handleDialogClose}>
            <DialogTitle style={{ fontFamily: 'GmarketSansMedium' }}>룩북을 삭제하시겠습니까?</DialogTitle>
            <DialogContent>
              <DialogContentText style={{ fontFamily: 'GmarketSansMedium' }}>삭제된 룩북은 복구가 불가합니다.</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                취소
              </Button>
              <Button onClick={handleLookBookDelete} color="secondary" autoFocus>
                삭제
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}

      {props.solution && (
        <a href="/solution" className={classes.confirmLink} style={{ color: '#000' }} target="_blank" rel="noreferrer">
          컨펌을 못 받으셨나요?
        </a>
      )}
    </div>
  );
}
