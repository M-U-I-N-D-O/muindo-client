import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CirclePicker } from 'react-color';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { colorModalOpen, lookBookColor } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '70px',
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
  modalMiddleContents: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    height: '500px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBottomContents: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2vw',
  },
  colorCircleBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '250px',
    height: '170px',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ColorChangeModal({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.lookBook.open);

  useEffect(() => {
    dispatch(lookBookColor('#fff'));
  }, [dispatch]);

  const handleLookBookColorClose = () => {
    dispatch(colorModalOpen(false));
  };

  const handleLookBookColorReset = () => {
    dispatch(lookBookColor('#fff'));
    dispatch(colorModalOpen(false));
  };

  const handleLookBookColorChange = (color) => {
    dispatch(lookBookColor(color.hex));
  };

  return (
    <div>
      <Dialog className={classes.root} open={open} TransitionComponent={Transition} keepMounted onClose={handleLookBookColorClose}>
        <DialogContent>
          <div className={classes.colorCircleBox}>
            <CirclePicker
              color="#fff"
              colors={[
                '#df5f6a',
                '#f0b5ba',
                '#e4a679',
                '#e0d666',
                '#b6efb1',
                '#cbec9e',
                '#9DC8C8',
                '#a8eee8',
                '#b5d8f0',
                '#5aa7de',
                '#dddff8',
                '#a9aeee',
                '#f5d8f7',
                '#f4c6e1',
                '#D499B9',
                '#98a1a8',
                '#606e79',
                '#000000',
              ]}
              onChangeComplete={handleLookBookColorChange}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLookBookColorReset} color="primary">
            Reset
          </Button>
          <Button onClick={handleLookBookColorClose} color="primary">
            결정
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
