import React, { Component } from 'react';
import styled from 'styled-components';
import MotionStack from 'react-motion-stack';
import 'react-motion-stack/build/motion-stack.css';

import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';
import { dialogMode } from '../../actions';

const customerData = [
  { id: 1, url: './images/main/1.png', tpo: '이 룩은 마음에 드시나요 ?' },
  { id: 2, url: './images/main/2.png', tpo: '이 룩은 마음에 드시나요 ?' },
  { id: 3, url: './images/main/3.png', tpo: '이 룩은 마음에 드시나요 ?' },
  { id: 4, url: './images/main/4.png', tpo: '이 룩은 마음에 드시나요 ?' },
  { id: 5, url: './images/main/5.png', tpo: '' },
];
const userData = [
  { id: 1, url: './images/main/1.png', tpo: '이 룩은 마음에 드시나요 ?' },
  { id: 2, url: './images/main/2.png', tpo: '이 룩은 마음에 드시나요 ?' },
  { id: 3, url: './images/main/3.png', tpo: '이 룩은 마음에 드시나요 ?' },
  { id: 4, url: './images/main/4.png', tpo: '이 룩은 마음에 드시나요 ?' },
  { id: 6, url: './images/main/6.png', tpo: '' },
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      checked: false,
      tinderCount: 1,
    };
  }

  onBeforeSwipe = (swipe, direction, state) => {
    document.getElementById('tinder-btn1').disabled = true;
    document.getElementById('tinder-btn2').disabled = true;

    if (direction === 'right') {
      if (this.state.tinderCount < 5) {
        this.setState({ text: 'Confirm' });
      }
    } else {
      if (this.state.tinderCount < 5) {
        this.setState({ text: 'Nope' });
      }
    }

    if (this.state.tinderCount < 5) {
      swipe();
    }
  };

  onSwipeEnd = () => {
    this.setState({ text: '' });
    this.setState({ tinderCount: this.state.tinderCount + 1 });
    document.getElementById('tinder-btn1').disabled = false;
    document.getElementById('tinder-btn2').disabled = false;
  };

  renderButtons(props) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }} className="btn-group">
        <CustomButton
          id="tinder-btn1"
          children={
            <NopeSwipeButtonBox elevation={3}>
              <CloseIcon fontSize="large" />
            </NopeSwipeButtonBox>
          }
          onClick={props.reject}
        />
        <CustomButton
          id="tinder-btn2"
          children={
            <ConfirmSwipeButtonBox elevation={3}>
              <FavoriteIcon fontSize="large" />
            </ConfirmSwipeButtonBox>
          }
          onClick={props.accept}
        />
      </div>
    );
  }

  render() {
    const { storeDialogMode } = this.props;
    return (
      <div
        style={{
          backgroundColor: '#222',
          height: '100vh',
          width: '100%',
          display: 'grid',
          alignItems: 'center',
          msTouchAction: 'pan-y',
          touchAction: 'pan-y',
          overflow: 'hidden',
        }}
        className="demo-wrapper"
      >
        <MotionStack
          data={
            localStorage.getItem('token')
              ? userData.map((item, index) => {
                  var returnObj = {};
                  returnObj['id'] = index;

                  if (item.id === 6) {
                    returnObj['element'] = (
                      <TinderBox
                        key={item.id}
                        onClick={() => {
                          this.props.history.push('/confirm');
                        }}
                      >
                        <TinderImg src={item.url} alt="img" />

                        <TpoText>{item.tpo}</TpoText>
                      </TinderBox>
                    );
                  } else {
                    returnObj['element'] = (
                      <TinderBox key={item.id}>
                        <WishBox>
                          <WishButton
                            onClick={(e) => {
                              // e.preventDefault();
                              this.setState({ checked: !this.state.checked });
                              var text = document.getElementById('test');
                              if (!this.state.checked) {
                                text.innerText = '♥';
                              } else {
                                text.innerText = '♡';
                              }
                            }}
                          >
                            <WishText id="test">♡</WishText>
                          </WishButton>
                        </WishBox>
                        <TinderImg src={item.url} alt="img" />

                        <TpoText>{item.tpo}</TpoText>
                      </TinderBox>
                    );
                  }

                  return returnObj;
                })
              : customerData.map((item, index) => {
                  var returnObj = {};
                  returnObj['id'] = index;
                  if (item.id === 5) {
                    returnObj['element'] = (
                      <TinderBox
                        key={item.id}
                        onClick={() => {
                          storeDialogMode();
                        }}
                      >
                        <TinderImg src={item.url} alt="img" />
                        <TpoText>{item.tpo}</TpoText>
                      </TinderBox>
                    );
                  } else {
                    returnObj['element'] = (
                      <TinderBox key={item.id}>
                        <WishBox>
                          <WishButton
                            onClick={(e) => {
                              // e.preventDefault();
                              this.setState({ checked: !this.state.checked });
                              var text = document.getElementById('test');
                              if (!this.state.checked) {
                                text.innerText = '♥';
                              } else {
                                text.innerText = '♡';
                              }
                            }}
                          >
                            <WishText id="test">♡</WishText>
                          </WishButton>
                        </WishBox>
                        <TinderImg src={item.url} alt="img" />
                        <TpoText>{item.tpo}</TpoText>
                      </TinderBox>
                    );
                  }

                  return returnObj;
                })
          }
          onSwipeEnd={this.onSwipeEnd}
          onBeforeSwipe={this.onBeforeSwipe}
          render={(props) => props.element}
          renderButtons={this.renderButtons}
          infinite={false}
          springConfig={{ stiffness: 1600, damping: 80 }}
        />
        <BottomContainer>
          {this.state.text === 'Nope' ? (
            <NopeText id="btn-text">{this.state.text}</NopeText>
          ) : this.state.text === 'Confirm' ? (
            <LikeText id="btn-text">{this.state.text}</LikeText>
          ) : (
            <BottomText>{this.state.text}</BottomText>
          )}
        </BottomContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  storeDialogMode: () => dispatch(dialogMode(1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const BottomContainer = styled.div`
  display: flex;
  height: 6vh;
  text-align: center;
  justify-content: center;
`;

const CustomButton = styled.button`
  border: none;
  background: transparent;
  margin: 0 3vw;
  margin-top: 10vh;
  z-index: 100;
`;
const BottomText = styled.h1`
  position: absolute;
  width: 50%;
  color: white;
  margin: 0;
  bottom: 55%;
  margin: 0 auto;
`;
const NopeText = styled.h1`
  position: absolute;
  color: #ec5e6f;
  border: 5px solid #ec5e6f;
  border-radius: 5px;
  bottom: 55%;
  z-index: 100;
  transform: rotate(-20deg);
  width: 50vw;
`;
const LikeText = styled.h1`
  position: absolute;
  color: #76e2b3;
  border: 5px solid #76e2b3;
  border-radius: 5px;
  bottom: 55%;
  z-index: 100;
  width: 50vw;
  transform: rotate(20deg);
`;
const TinderImg = styled.img`
  max-width: 100%;
  height: auto;
  user-select: none;
  padding-top: 150px;
  background-color: #222;
`;
const TpoText = styled.p`
  color: white;
  text-align: center;
  font-weight: bold;
`;
const TinderBox = styled.div`
  background-color: #222;
`;
const WishBox = styled.div`
  position: absolute;
  width: 100%;
  text-align: right;
  padding-top: 150px;
`;
const WishButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
`;
const WishText = styled.p`
  margin: 0;
  padding-right: 5px;
  font-size: 48px;
  color: #ff3e3e;
`;
const NopeSwipeButtonBox = styled(Paper)`
  background-color: #424242;
  padding: 3vw !important;
  border-radius: 50%;
  color: #ec5e6f !important;
`;
const ConfirmSwipeButtonBox = styled(Paper)`
  background-color: #424242;
  padding: 3vw !important;
  border-radius: 50%;
  color: #76e2b3 !important;
`;
