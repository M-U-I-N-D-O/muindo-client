import React from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
  display: flex;
  /* padding-bottom: 66px; */
  /* padding-top: 70px; */
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
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
        <LoadingText>Uploading...📡</LoadingText>
      </LoadingBox>
    </ContainerBox>
  );
}

export default Progress;
