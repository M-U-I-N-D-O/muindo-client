import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { useSelector, useDispatch } from 'react-redux';
import { infoModalOpen } from '../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '30px',
    paddingBottom: '66px',
    flexDirection: 'column',
    alignItems: 'center',
    height: '91vh',
  },
  modal: {
    backgroundColor: 'white',
    maxWidth: '350px',
    height: '70vh',
    width: '100vw',
    flexDirection: 'column',
    marginTop: '50px',
    border: 'solid 3px',
    borderRadius: '25px',
  },
  modalCloseBtn: {
    width: '25px',
    height: '25px',
  },
  modalTopContents: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  hiddenBtn: {
    visibility: 'hidden',
    width: '25px',
    height: '25px',
  },
  clothesBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '300px',
  },
  infoContainer: {
    display: 'flex',
    width: '300px',
    alignItems: 'center',
    margin: '7px',
  },
  infoImg: {
    width: '80px',
    height: '90px',
  },
  infoBox: {
    marginLeft: '15px',
    display: 'flex',
    fontSize: '16px',
    flexDirection: 'column',
  },
  closetPriceBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'GmarketSansMedium',
    fontWeight: 'bold',
    fontSize: '17px',
    marginTop: '10px',
    width: '200px',
    height: '50px',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MyClosetInfo(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const open = useSelector((state) => state.myPage.open);
  const info = useSelector((state) => state.myPage.info);

  const handleClosetInfoModalClose = () => {
    dispatch(infoModalOpen(false));
  };

  return (
    <div>
      <Dialog className={classes.root} open={open} TransitionComponent={Transition} keepMounted onClose={handleClosetInfoModalClose}>
        <DialogContent>
          <div className={classes.clothesBox}>
            {info &&
              info.map(function (item, i) {
                return (
                  <Paper key={i} elevation={2} className={classes.infoContainer}>
                    <img className={classes.infoImg} src={item['url']} alt="infoImg" />
                    <div className={classes.infoBox}>
                      <a
                        href={item['musinsa']}
                        style={{ color: '#6C49B8', textDecoration: 'none' }}
                        target="_blank"
                        rel="noreferrer"
                        title="무신사에서 상품 보기"
                      >
                        <div style={{ color: '#000000', fontWeight: 'bold' }}> {item['brand']}</div>
                        <div> {item['name']}</div>
                        <div> {item['price']}원</div>
                      </a>
                    </div>
                  </Paper>
                );
              })}
            <Paper elevation={4} className={classes.closetPriceBox}>
              {'총 금액💰 : '} {props.price}\
            </Paper>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosetInfoModalClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
