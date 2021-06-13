import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navbarMode, bottomNavMode } from '../../actions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function TopNav() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleNavbarMode = (mode) => {
    dispatch(navbarMode(mode));
    dispatch(bottomNavMode(-1));
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#000000',
          height: '60px',
          widht: '100%',
        }}
      >
        <Toolbar>
          <NavTitleContainer>
            <NavTitle>
              <Link to="/main" onClick={() => handleNavbarMode(1)} style={{ textDecoration: 'none', color: 'white' }}>
                MUINDO
              </Link>
            </NavTitle>
          </NavTitleContainer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default TopNav;

const NavTitleContainer = styled.div`
  margin: auto;
`;
const NavTitle = styled.h3`
  flex-grow: 1;
  color: white;
  font-size: 24px;
  margin: 0;
  padding-top: 8px;
`;
