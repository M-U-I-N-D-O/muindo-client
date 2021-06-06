import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink as Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navbarMode, bottomNavMode } from '../../actions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#e2b063',
//     },
//   },
// });
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    width: '100vw',
  },
}));

function TopNav() {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  // const history = useHistory();

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
