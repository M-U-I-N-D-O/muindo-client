import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { solutionModalMode } from '../../actions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DetailItemModal() {
  const modalMode = useSelector((state) => state.solution.modalMode);
  const dispatch = useDispatch();

  //  const handleClose = () => {
  //    dispatch(solutionModalMode(1));
  //  };
  return (
    <div>
      <Dialog
        open={modalMode === 2}
        // onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle style={{ textAlign: 'center' }} id="scroll-dialog-title">
          제품 상세 정보
        </DialogTitle>
        <DialogContent dividers={true}>
          <h1>Test Text</h1>
          <h1>Test Text</h1>
          <h1>Test Text</h1>
          <h1>Test Text</h1>
          <h1>Test Text</h1>
          <h1>Test Text</h1>
          <h1>Test Text</h1>

          {/* <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(solutionModalMode(1));
            }}
            color="primary"
          >
            이전
          </Button>
          <Button
            onClick={() => {
              dispatch(solutionModalMode(0));
            }}
            color="primary"
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DetailItemModal;
