import React from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
  display: flex;
  padding-bottom: 3.5rem;
  padding-top: 25vh;
  justify-content: center;
  align-items: center;
`;
const LoadingBox = styled.div`
  justify-content: center;
  align-items: center;
`;
const LoadingText = styled.h1`
  text-align: center;
`;

function Progress() {
  return (
    <ContainerBox>
      <LoadingBox>
        <img src="/images/progress/loading.gif" alt="progress-gif" style={{ backgroundColor: 'none' }} />
        <LoadingText>분석중...🕵️‍♂️</LoadingText>
      </LoadingBox>
    </ContainerBox>
  );
}

export default Progress;
