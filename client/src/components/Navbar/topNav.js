import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink as Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

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
  // sidebarBox: {
  //   height: 100,
  // },

  // list: {
  //   width: 300,
  // },
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
  };
  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setOpen(open);
  // };

  // const drawerList = (
  //   <div className={classes.list} onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
  //     <BottomNavigation
  //       value={value}
  //       onChange={(event, newValue) => {
  //         setValue(newValue);
  //       }}
  //       showLabels
  //       className={classes.sidebarBox}
  //     >
  //       {/* 지금은 버튼 [로그인,로그아웃,회원가입] 3개인데, google oauth 토큰을 받았을 경우, 아닌경우로
  //       로그인 버튼 or 로그아웃 버튼이 나와야 함 */}
  //       <BottomNavigationAction
  //         onClick={() => {
  //           history.push('/login');
  //         }}
  //         label="Login"
  //         icon={<MeetingRoomIcon />}
  //       />

  //       {/* 로그아웃 버튼을 누를 시는, 1.토큰만료, 2.메인페이지(Home)로 전환 */}
  //       <BottomNavigationAction
  //         label="Logout"
  //         onClick={() => {
  //           history.push('/home');
  //         }}
  //         icon={<NoMeetingRoomIcon />}
  //       />
  //       <BottomNavigationAction
  //         onClick={() => {
  //           history.push('/signup');
  //         }}
  //         label="Sign up"
  //         icon={<LockOpenIcon />}
  //       />
  //     </BottomNavigation>
  //     <Divider />
  //     <List>
  //       {[
  //         ['홈', '/home', 1],
  //         ['인트로', '/', 0],
  //         ['셜록의 돋보기', '/analysis_clothes', 1],
  //         ['왓슨의 믹스매치', '/analysis_color', 1],
  //         ['베이커가 옷장', '/closet', 1],
  //         ['옷장 커뮤니티', '/community', 1],
  //         ['모리아티 솔루션', '/solution', 1],
  //       ].map((text, index) => (
  //         <Link key={index.toString()} to={`${text[1]}`} style={{ textDecoration: 'none' }} onClick={() => handleNavbarMode(text[2])}>
  //           <ListItem button>
  //             <Typography variant="h5" style={{ fontWeight: 'bold', color: '#323B48' }}>
  //               {text[0]}
  //             </Typography>
  //           </ListItem>
  //         </Link>
  //       ))}
  //     </List>
  //   </div>
  // );

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
          {/* <ThemeProvider theme={theme}>
            <IconButton edge="start" className={clsx(open && classes.hide)} color="primary" aria-label="menu" onClick={toggleDrawer('left', !open)}>
              <MenuIcon style={{ fontSize: 50 }} />
              <SwipeableDrawer anchor={'left'} open={open} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
                {drawerList}
              </SwipeableDrawer>
            </IconButton>
          </ThemeProvider> */}
          <NavTitleContainer>
            <NavTitle>
              <Link to="/main" onClick={() => handleNavbarMode(1)} style={{ textDecoration: 'none', color: 'white' }}>
                MUINDO
              </Link>
            </NavTitle>
          </NavTitleContainer>

          {/* <Link to="/about" onClick={() => handleNavbarMode(1)}>
            <img src="/images/navbar/logoImg.png" alt="logoImg" width="70vh" />
          </Link> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopNav;
