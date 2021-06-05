import React, { Component } from 'react';
import styled from 'styled-components';
import MotionStack from 'react-motion-stack';
import 'react-motion-stack/build/motion-stack.css';
import './index.css';
import axios from 'axios';
import url from '../../url';

// const data = Array.from(this.state.ItemList.data, (v, i) => ({
//   id: i,
//   element: <img key={v[0]} draggable={false} src={`${v[1]}`} alt="img" />,
// }));
// const data = Array.from({ length: 4 }, (_, i) => ({
//   id: i,
//   element: <img key={i} draggable={false} src={`https://source.unsplash.com/random/${i + 1}`} alt="img" />,
//   //   element: (
//   //     <div style={{ backgroundColor: '#222' }}>
//   //       <img key={i} draggable={false} src={`./images/main/${i + 1}.png`} alt="img" />
//   //     </div>
//   //   ),
// }));

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
      .get(url + 'tinder/test')
      .then((res) => {
        console.log(res.data);
        this.setState({ ItemList: res.data });
        // console.log('ItemList :', this.state.ItemList);
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
        .post('주소', json, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res);
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
      //   this.postData('like', state.data[0].element.key, localStorage.getItem('token'));
    } else {
      this.setState({ text: 'Nope' });
      console.log('방금 선택 : 놉 하나 추가요~');
      //   this.postData('nope', state.data[0].element.key, localStorage.getItem('token'));
    }
    console.log('현재 data key', state.data[0].element.key);
    console.log('유저 token : ', localStorage.getItem('token'));
    console.log('데이터 :', state.data);
    swipe();
  };

  onSwipeEnd = ({ data }) => {
    // console.log('타켓 키 : ', data[data.length - 1].element.key);
    // if (this.state.text === 'Like') {
    //   console.log('따봉 하나 추가요~');
    // } else {
    //   console.log('놉 하나 추가요 ~');
    // }
    // console.log('선택 :', this.state);
    // console.log('유저 token :', localStorage.getItem('token'));
    // console.log('data', data);

    this.setState({ text: '' });
    console.log('마침 :', this.state);
    document.getElementById('tinder-btn1').disabled = false;
    document.getElementById('tinder-btn2').disabled = false;
  };

  renderButtons(props) {
    return (
      <div className="btn-group">
        <CustomButton id="tinder-btn1" children="❌" onClick={props.reject} />
        <CustomButton id="tinder-btn2" children="⭕" onClick={props.accept} />
      </div>
    );
  }

  render() {
    return (
      <div className="demo-wrapper">
        <MotionStack
          data={this.state.ItemList.map((item, index) => {
            // console.log('한 요소 :', item);
            var returnObj = {};
            returnObj['id'] = index;
            returnObj['element'] = <img key={item.id} src={item.url} alt="img" />;
            // console.log('하나 만들어진 obj :', returnObj);
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
          <BottomText>{this.state.text}</BottomText>
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
