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
  text-align: center;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }
`;

function TopComment(props) {
  return (
    <ContainerBox>
      <div style={{ margin: 'auto 0' }}>
        <TopText>{props.comment}</TopText>
      </div>
    </ContainerBox>
  );
}

export default TopComment;
