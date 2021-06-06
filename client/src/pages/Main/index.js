import React, { Component } from 'react';
import styled from 'styled-components';
import MotionStack from 'react-motion-stack';
import 'react-motion-stack/build/motion-stack.css';

// import './index.css';

const data = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  //   element: (
  //     <div style={{ margin: 'auto 0', backgroundColor: '#222' }}>
  //       <img draggable={false} src={`https://source.unsplash.com/random/${i + 1}`} alt="img" />
  //     </div>
  //   ),
  element: (
    <img
      style={{ maxWidth: '100%', height: 'auto', userSelect: 'none', paddingTop: '60px' }}
      key={i}
      draggable={false}
      src={`./images/main/${i + 1}.png`}
      alt="img"
    />
  ),
}));

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onBeforeSwipe = (swipe, direction, state) => {
    document.getElementById('tinder-btn1').disabled = true;
    document.getElementById('tinder-btn2').disabled = true;
    if (direction === 'right') {
      this.setState({ text: 'Like' });
      console.log('방금 선택 : 따봉 하나 추가요~');
    } else {
      this.setState({ text: 'Nope' });
      console.log('방금 선택 : 놉 하나 추가요~');
    }
    console.log('현재 data key', state.data[0].element.key);
    console.log('유저 token : ', localStorage.getItem('token'));
    console.log('데이터 : ', state.data);

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
          data={data}
          onSwipeEnd={this.onSwipeEnd}
          onBeforeSwipe={this.onBeforeSwipe}
          render={(props) => props.element}
          renderButtons={this.renderButtons}
          infinite={false}
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

export default Main;

const BottomContainer = styled.div`
  height: 60px;
  text-align: center;
`;

const CustomButton = styled.button`
  border: none;
  background: transparent;
  margin: 0 5vw;
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

// import React from 'react';

// function Main() {
//   return (
//     <div>
//       <h1>메인페이지</h1>
//     </div>
//   );
// }

// export default Main;
