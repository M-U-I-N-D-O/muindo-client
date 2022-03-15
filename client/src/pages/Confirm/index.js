import React, { Component } from 'react';
import styled from 'styled-components';
import MotionStack from 'react-motion-stack';
import 'react-motion-stack/build/motion-stack.css';

import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';
import url from '../../url';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      ItemList: [],
      checked: false,
    };
  }

  fetchData = () => {
    axios
      .get(url + 'tinder/look')
      .then((res) => {
        let fetchData = res.data.sort(() => Math.random() - 0.5);
        this.setState({ ItemList: fetchData });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  postData = (opinion, id, token) => {
    const json = JSON.stringify({ id: id, opinion: opinion, token: token });
    try {
      axios.post(url + 'tinder/confirm', json, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  onBeforeSwipe = (swipe, direction, state) => {
    document.getElementById('tinder-btn1').disabled = true;
    document.getElementById('tinder-btn2').disabled = true;

    if (direction === 'right') {
      this.setState({ text: 'Confirm' });
      this.postData('like', state.data[0].element.key, localStorage.getItem('token'));
    } else {
      this.setState({ text: 'Nope' });
      this.postData('nope', state.data[0].element.key, localStorage.getItem('token'));
    }

    this.setState({ checked: false });
    swipe();
  };

  onSwipeEnd = ({ data }) => {
    this.setState({ text: '' });
    document.getElementById('tinder-btn1').disabled = false;
    document.getElementById('tinder-btn2').disabled = false;
  };

  putData = (value, id) => {
    const json = JSON.stringify({ value: value });
    try {
      axios.put(url + `tinder/thumbs/${id}`, json, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
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
    return (
      <div
        style={{
          position: 'relative',
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
          data={this.state.ItemList.map((item, index) => {
            let returnObj = {};
            returnObj['id'] = index;
            returnObj['element'] = (
              <TinderBox key={item.id}>
                <WishBox>
                  <WishButton
                    onClick={() => {
                      this.setState({ checked: !this.state.checked });
                      let text = document.getElementById('test');
                      if (!this.state.checked) {
                        text.innerText = '♥';
                      } else {
                        text.innerText = '♡';
                      }
                      this.putData(!this.state.checked, item.id);
                    }}
                  >
                    <WishText id="test">♡</WishText>
                  </WishButton>
                </WishBox>
                <TinderImg src={item.url} alt="img" />
                <TpoText>{item.tpo}</TpoText>
              </TinderBox>
            );
            return returnObj;
          })}
          onSwipeEnd={this.onSwipeEnd}
          onBeforeSwipe={this.onBeforeSwipe}
          render={(props) => props.element}
          renderButtons={this.renderButtons}
          infinite={true}
          springConfig={{ stiffness: 2000, damping: 80 }}
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

export default Confirm;

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
  top: 225px;
  margin: 0 auto;
  z-index: 100;
`;
const NopeText = styled.h1`
  position: absolute;
  color: #ec5e6f;
  border: 5px solid #ec5e6f;
  border-radius: 5px;
  top: 225px;
  z-index: 100;
  transform: rotate(-20deg);
  padding: 0 25px;
`;
const LikeText = styled.h1`
  position: absolute;
  color: #76e2b3;
  border: 5px solid #76e2b3;
  border-radius: 5px;
  top: 225px;
  z-index: 100;
  transform: rotate(20deg);
  padding: 0 10px;
`;

const TinderBox = styled.div`
  background-color: #222;
`;
const TinderImg = styled.img`
  max-width: 100%;
  height: auto;
  user-select: none;
  padding-top: 150px;
`;
const TpoText = styled.p`
  color: white;
  text-align: center;
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
  padding: 15px;
  border-radius: 50%;
  color: #ec5e6f;
`;
const ConfirmSwipeButtonBox = styled(Paper)`
  background-color: #424242;
  padding: 15px;
  border-radius: 50%;
  color: #76e2b3;
`;
