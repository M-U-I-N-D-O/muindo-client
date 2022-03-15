import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

function Error() {
  const history = useHistory();

  return (
    <Container>
      <ErrorImg src="/images/error/error_1.png" alt="error-img" width="220px" height="220px" />
      <ErrorMainText>404</ErrorMainText>
      <ErrorMidText>Error Not Found</ErrorMidText>
      <ErrorSubText>해당 문서를 찾을수 없습니다.</ErrorSubText>

      <StyledButton
        onClick={() => {
          history.goBack();
        }}
        variant="contained"
      >
        이전으로
      </StyledButton>
      <StyledButton
        onClick={() => {
          history.push('/');
        }}
        variant="contained"
      >
        메인으로
      </StyledButton>
    </Container>
  );
}

export default Error;

const Container = styled.div`
  text-align: center;
  padding-top: 20vh;
`;
const ErrorMainText = styled.h1`
  font-size: 36px;
  margin-bottom: 0;
  margin-top: 0;
`;
const ErrorMidText = styled.h2`
  margin-top: 0;
  font-size: 24px;
`;
const ErrorSubText = styled.p`
  margin-top: 16px;
  margin-bottom: 5vh;
`;
const ErrorImg = styled.img``;

const StyledButton = styled(Button)`
  margin: 8px;
`;
