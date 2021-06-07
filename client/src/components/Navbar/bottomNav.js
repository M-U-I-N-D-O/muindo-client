import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bottomNavMode } from '../../actions';
import { useHistory } from 'react-router-dom';
import { dialogMode } from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'black',
  },

  actionItemStyles: {
    color: 'lightgray',
    '&$selected': {
      color: 'red',
    },
  },
  selected: {},
});

function BottomNav() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const value = useSelector((state) => state.navbar.button);
  const history = useHistory();

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          dispatch(bottomNavMode(newValue));
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          classes={{ root: classes.actionItemStyles, selected: classes.selected }}
          label="컨펌하기"
          icon={<CheckCircleOutlineTwoToneIcon />}
          onClick={() => {
            if (localStorage['token']) {
              history.push('/confirm');
            } else {
              dispatch(dialogMode(1));
            }
          }}
        />
        <BottomNavigationAction
          classes={{ root: classes.actionItemStyles, selected: classes.selected }}
          label="컨펌받기"
          icon={<AddBoxOutlinedIcon />}
          onClick={() => {
            if (localStorage['token']) {
              history.push('/closet');
            } else {
              dispatch(dialogMode(1));
            }
          }}
        />
        <BottomNavigationAction
          classes={{ root: classes.actionItemStyles, selected: classes.selected }}
          label="마이페이지"
          icon={<PermIdentityOutlinedIcon />}
          onClick={() => dispatch(dialogMode(2))}
        />
      </BottomNavigation>
    </div>
  );
}

export default BottomNav;
