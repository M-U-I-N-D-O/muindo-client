import React, { Component } from 'react';
import styled from 'styled-components';
import MotionStack from 'react-motion-stack';
import 'react-motion-stack/build/motion-stack.css';
import axios from 'axios';
import url from '../../url';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      ItemList: [],
    };
  }

  fetchData = async () => {
    axios
      .get(url + 'tinder/look')
      .then((res) => {
        this.setState({ ItemList: res.data });
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
      axios
        .post(url + 'tinder/confirm', json, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log('반환 결과 :', res);
        });
    } catch (err) {
      console.log(err);
    }
  };
  onBeforeSwipe = (swipe, direction, state) => {
    document.getElementById('tinder-btn1').disabled = true;
    document.getElementById('tinder-btn2').disabled = true;

    if (direction === 'right') {
      this.setState({ text: 'Like' });
      console.log('방금 선택 : 따봉 하나 추가요~');
      this.postData('like', state.data[0].element.key, localStorage.getItem('token'));
    } else {
      this.setState({ text: 'Nope' });
      console.log('방금 선택 : 놉 하나 추가요~');
      this.postData('nope', state.data[0].element.key, localStorage.getItem('token'));
    }
    console.log('현재 data key', state.data[0].element.key);
    console.log('유저 token : ', localStorage.getItem('token'));
    console.log('데이터 :', state.data);
    swipe();
  };

  onSwipeEnd = ({ data }) => {
    this.setState({ text: '' });
    console.log('마침 :', this.state);
    document.getElementById('tinder-btn1').disabled = false;
    document.getElementById('tinder-btn2').disabled = false;
  };

  renderButtons(props) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }} className="btn-group">
        <CustomButton id="tinder-btn1" children="👎" onClick={props.reject} />
        <CustomButton id="tinder-btn2" children="👍" onClick={props.accept} />
      </div>
    );
  }

  render() {
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
        }}
        className="demo-wrapper"
      >
        <MotionStack
          data={this.state.ItemList.map((item, index) => {
            var returnObj = {};
            returnObj['id'] = index;
            returnObj['element'] = <TinderImg key={item.id} src={item.url} alt="img" />;
            return returnObj;
          })}
          onSwipeEnd={this.onSwipeEnd}
          onBeforeSwipe={this.onBeforeSwipe}
          render={(props) => props.element}
          renderButtons={this.renderButtons}
          infinite={true}
          springConfig={{ stiffness: 1600, damping: 80 }}
        />
        <BottomContainer>
          {this.state.text === 'Nope' ? (
            <BottomText style={{ color: 'red' }}>{this.state.text}</BottomText>
          ) : (
            <BottomText style={{ color: 'green' }}>{this.state.text}</BottomText>
          )}
        </BottomContainer>
      </div>
    );
  }
}

export default Confirm;

const BottomContainer = styled.div`
  height: 60px;
  text-align: center;
`;
const CustomButton = styled.button`
  border: none;
  background: transparent;
  margin: 0 3vh;
  margin-top: 10vh;
  font-size: 3em;
`;
const BottomText = styled.h1`
  position: absolute;
  width: 100%;
  color: white;
  margin: 0;
  bottom: 35%;
  margin: 0 auto;
`;
const TinderImg = styled.img`
  max-width: 100%;
  height: auto;
  user-select: none;
  padding-top: 60px;
`;
