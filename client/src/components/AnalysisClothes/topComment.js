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
  font-size: 1.5vw;
  text-align: center;
`;

function TopComment() {
  return (
    <ContainerBox>
      <div>
        <img
          src="/images/common/sherlock_icon.jpg"
          alt="sherlock_icon"
          style={{ width: '4vw' }}
        />
      </div>
      <div style={{ margin: 'auto 0' }}>
        <TopText>당신이 스타일을 분석해보겠습니다.</TopText>
        <TopText>이미지를 첨부해주세요.</TopText>
      </div>
    </ContainerBox>
  );
}

export default TopComment;
