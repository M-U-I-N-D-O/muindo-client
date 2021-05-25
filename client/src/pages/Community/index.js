import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ClosetModal from '../../components/Closet/closetModal';

import { ModalContext } from '../../App';
const useStyles = makeStyles((theme) => ({}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const { openModal, setOpenModal } = useContext(ModalContext);

  return (
    <div>
      <button type="button" onClick={() => setOpenModal(true)}>
        Open Modal
      </button>
      <ClosetModal />
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // display: 'flex',
//     // maxWidth: '1024px',
//     // width: '80vw',
//     // backgroundColor: 'white',
//     // flexDirection: 'column',
//     // alignItems: 'center',
//   },
// }));
// function Community() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//       <h1>This is Community Page</h1>
//     </div>
//   );
// }

// export default Community;
