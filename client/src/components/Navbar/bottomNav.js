import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dialogMode } from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'black',
  },
  label: {
    color: 'white',
  },
});

function BottomNav() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState(-1);
  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.label}
          label="컨펌하기"
          icon={value === 0 ? <CheckCircleTwoToneIcon /> : <CheckCircleOutlineTwoToneIcon />}
        />
        <BottomNavigationAction
          className={classes.label}
          label="컨펌받기"
          icon={value === 1 ? <AddBoxTwoToneIcon /> : <AddBoxOutlinedIcon />}
          onClick={() => dispatch(dialogMode(1))}
        />
        <BottomNavigationAction
          className={classes.label}
          label="마이페이지"
          icon={value === 2 ? <PermIdentityTwoToneIcon /> : <PermIdentityOutlinedIcon />}
          onClick={() => dispatch(dialogMode(2))}
        />
      </BottomNavigation>
    </div>
  );
}

export default BottomNav;
