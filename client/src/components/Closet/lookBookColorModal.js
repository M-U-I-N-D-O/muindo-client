import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import ColorSelect from './colorPalette';
// import { ModalContext } from '../../App';

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
    // display: 'flex',
    // justifyContent: 'center',
    // // flexDirection: 'column',
    // alignItems: 'center',
    // // width: '100px',
    // // maxWidth: '1024px',
    // // minHeight: ' calc(100vh - 8.5rem)',
    // // backgroundColor: '#ececec',
    // // height: '80vw',
    display: 'flex',
    paddingTop: '70px',
    paddingBottom: '66px',
    // // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modal: {
    // backgroundColor: 'white',
    // maxWidth: '800px',
    // minWidth: '70px',
    // minHeight: '73vh',
    // height: '78vh',
    // width: '66vw',
    // flexDirection: 'column',
    // marginTop: '50px',
    // border: 'solid 3px',
    // borderRadius: '25px',
    // // overflow: 'auto',
    backgroundColor: 'white',
    maxWidth: '350px',
    // minWidth: '340px',
    // minHeight: '73vh',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column',
    // marginTop: '50px',
    border: 'solid 3px',
    borderRadius: '25px',
    // overflow: 'auto',
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
    // width: '40vw',
    height: '500px',
    // border: 'solid 1px',
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
  // const { lookBookColorModal, setLookBookColorModal } = useContext(ModalContext);
  // const { setLookBookColorSelect } = useContext(ModalContext);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.lookBook.open);

  useEffect(() => {
    // setLookBookColorSelect('#fff');
    dispatch(lookBookColor('#fff'));
  }, [dispatch]);

  const handleLookBookColorClose = () => {
    // setLookBookColorModal(false);
    dispatch(colorModalOpen(false));
  };

  const handleLookBookColorReset = () => {
    dispatch(lookBookColor('#fff'));
    dispatch(colorModalOpen(false));
  };

  const handleLookBookColorChange = (color) => {
    // setLookBookColorSelect(color.hex);
    dispatch(lookBookColor(color.hex));
    // console.log(backColor);
  };

  return (
    <div>
      <Dialog className={classes.root} open={open} TransitionComponent={Transition} keepMounted onClose={handleLookBookColorClose}>
        <DialogContent>
          <div className={classes.colorCircleBox}>
            {/* <ChromePicker /> */}
            {/* <CirclePicker
              color="#fff"
              colors={[
                '#df5f6a',
                '#f0b5ba',
                '#e4a679',
                '#e0d666',
                '#b6efb1',
                '#cbec9e',
                '#a8eee8',
                '#b5d8f0',
                '#5aa7de',
                '#dddff8',
                '#a9aeee',
                '#f5d8f7',
                '#f4c6e1',
                '#98a1a8',
                '#606e79',
                '#000000',

              ]}
              circleSize="32px"
              circleSpacing="17px"
              onChangeComplete={handleLookBookColorChange}
            /> */}
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
