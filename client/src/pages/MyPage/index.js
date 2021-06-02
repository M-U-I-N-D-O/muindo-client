import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { dialogMode } from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'black',
    height: '60px',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function MyPage() {
  const classes = useStyles();
  const mode = useSelector((state) => state.dialog.mode);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClose = () => {
    dispatch(dialogMode(0));
  };
  return (
    <div>
      <Dialog fullScreen open={mode === 2} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container>
          <MainText>로그인하세요</MainText>
          <SubText>
            무인도 회원등록하고 <br />
            본인의 패션 룩을 등록해보세요 :)
          </SubText>
        </Container>
        <List>
          <ListItem
            button
            onClick={() => {
              dispatch(dialogMode(0));
              history.push('/about');
            }}
          >
            <ListText>About MUINDO</ListText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => console.log('내 옷장 확인하기')}>
            <ListText>내 옷장 확인하기</ListText>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default MyPage;

const Container = styled.div`
  width: 100vw;
  height: 240px;
  background-color: black;
`;
const MainText = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin: 0;
  padding-left: 15px;
`;
const SubText = styled.p`
  font-size: 18px;
  font-weight: lighter;
  color: white;
  padding-left: 15px;
  margin: 20px 0;
`;
const ListText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
