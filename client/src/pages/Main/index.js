// import React, { Component } from 'react';
// import styled from 'styled-components';
// import MotionStack from 'react-motion-stack';
// import 'react-motion-stack/build/motion-stack.css';
// import './index.css';

// const data = Array.from({ length: 10 }, (_, i) => ({
//   id: i,
//   element: <img draggable={false} src={`https://source.unsplash.com/random/${i + 1}`} alt="img" />,
// }));

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//     };
//   }

//   onBeforeSwipe = (swipe, direction, state) => {
//     if (direction === 'right') {
//       console.log('Like');
//       this.setState({ text: 'Like' });
//       setTimeout(
//         function () {
//           this.setState({ text: '' });
//         }.bind(this),
//         500,
//       );
//       console.log('현재 :', this.state);
//     } else {
//       console.log('NoNo');
//       this.setState({ text: 'NoNo' });
//       setTimeout(
//         function () {
//           this.setState({ text: '' });
//         }.bind(this),
//         500,
//       );
//       console.log('현재 :', this.state);
//     }
//     console.log('direction', direction);
//     console.log('state', state);

//     swipe();
//   };

//   onSwipeEnd = ({ data }) => {
//     console.log('data', data);
//   };

//   renderButtons(props) {
//     return (
//       <div className="btn-group">
//         <button children="❌" onClick={props.reject} />
//         <button children="⭕" onClick={props.accept} />
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div className="demo-wrapper">
//         <MotionStack
//           data={data}
//           onSwipeEnd={this.onSwipeEnd}
//           onBeforeSwipe={this.onBeforeSwipe}
//           render={(props) => props.element}
//           renderButtons={this.renderButtons}
//         />
//         <BottomContainer>
//           <BottomText>{this.state.text}</BottomText>
//         </BottomContainer>
//       </div>
//     );
//   }
// }

// export default Main;

// const BottomContainer = styled.div`
//   height: 50px;
//   text-align: center;
// `;
// const TextBox = styled.div`
//   width: 100vw;
//   height: 50px;
//   padding-top: 200px;
// `;
// const BottomText = styled.h1`
//   margin: 0;
// `;

import React from 'react';

function Main() {
  return (
    <div>
      <h1>메인페이지</h1>
    </div>
  );
}

export default Main;
