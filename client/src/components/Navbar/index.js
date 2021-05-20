import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink as Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navbarMode } from '../../actions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';

const NavTitle = styled.h1`
  flex-grow: 1;
  color: #e2b063;
  font-size: 2rem;
  margin: 3px;
`;
const NavList = styled.ul`
  list-style: none;
`;
const NavListItem = styled.li`
  flex-grow: 1;
  float: left;
  margin-right: 2rem;
  color: #e2b063;
  font-size: 1.2rem;
  cursor: pointer;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e2b063',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 300,
  },
}));

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleNavbarMode = (mode) => {
    dispatch(navbarMode(mode));
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const drawerList = (
    <div
      className={classes.list}
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
    >
      <Divider />
      <List>
        {[
          ['홈', '/home', 1],
          ['인트로', '/', 0],
          ['셜록의 돋보기', '/analysis_clothes', 1],
          ['왓슨의 믹스매치', '/analysis_color', 1],
          ['베이커가 옷장', '/closet', 1],
          ['옷장 커뮤니티', '/community', 1],
          ['모리아티 솔루션', '/solution', 1],
        ].map((text, index) => (
          <Link
            key={index.toString()}
            to={`${text[1]}`}
            style={{ textDecoration: 'none' }}
            onClick={() => handleNavbarMode(text[2])}
          >
            <ListItem button>
              <Typography
                variant="h5"
                style={{ fontWeight: 'bold', color: '#323B48' }}
              >
                {text[0]}
              </Typography>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#323B48',
          height: '5rem',
        }}
      >
        <Toolbar>
          <Link to="/" onClick={() => handleNavbarMode(0)}>
            <img src="/images/navbar/logoImg.png" alt="logoImg" width="80vh" />
          </Link>
          <NavTitle>
            <Link
              to="/"
              onClick={() => handleNavbarMode(0)}
              style={{ textDecoration: 'none', color: '#e2b063' }}
            >
              셜록옷즈
            </Link>
          </NavTitle>

          <NavList>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <NavListItem>소개</NavListItem>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <NavListItem>로그인</NavListItem>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <NavListItem>회원가입</NavListItem>
            </Link>
          </NavList>

          <ThemeProvider theme={theme}>
            <IconButton
              edge="start"
              className={clsx(open && classes.hide)}
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer('right', !open)}
            >
              <MenuIcon style={{ fontSize: 50 }} />
              <SwipeableDrawer
                anchor={'right'}
                open={open}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
              >
                {drawerList}
              </SwipeableDrawer>
            </IconButton>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
