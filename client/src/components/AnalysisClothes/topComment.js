import React from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vh 0;
`;
const TopText = styled.h1`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
  font-size: 25px;
  /* font-size: 1.6vw; */
  text-align: center;
  @media (min-width: 320px) and (max-width: 480px) {
    /* font-size: 3.5vw; */
    font-size: 20px;
  }
`;
const TopImg = styled.img`
  width: 4vw;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 7vw;
  }
`;

function TopComment(props) {
  return (
    <ContainerBox>
      {/* <div>
        <TopImg src="/images/common/sherlock_icon.jpg" alt="sherlock_icon" />
      </div> */}
      <div style={{ margin: 'auto 0' }}>
        <TopText>{props.comment}</TopText>
      </div>
    </ContainerBox>
  );
}

export default TopComment;
