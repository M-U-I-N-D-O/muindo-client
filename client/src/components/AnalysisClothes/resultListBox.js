import React from 'react';
import styled from 'styled-components';

function ResultListBox(props) {
  const resultList = [
    ['/images/analysisClothes/cap.png', '캡/야구 모자', '블랙', 'https://bit.ly/3yqP5oq'],
    ['/images/analysisClothes/tshirt.png', '반팔 티셔츠', '블랙', 'https://bit.ly/3oIljav'],
    ['/images/analysisClothes/jeans.png', '데님 팬츠', '블루', 'https://bit.ly/3i0cvvl'],
    ['/images/analysisClothes/shoes.png', '스니커즈', '화이트', 'https://bit.ly/3f9hwzM'],
    ['/images/analysisClothes/backpack.png', '백팩', '블랙', 'https://bit.ly/3wm028W'],
    // ['/images/analysisClothes/outer.png', '아우터', '블랙', 'https://bit.ly/2QJpeXX'],
    // ['/images/analysisClothes/dress.png', '원피스', '화이트', 'https://bit.ly/3bNrXad'],
    // ['/images/analysisClothes/skirt.png', '스커트', '블랙', 'https://bit.ly/3fIyJ23'],
  ];

  return (
    <Container>
      {resultList.map((item, index) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ListImgBox>
            <img src={item[0]} alt={`${item[0]}`} style={{ display: 'inline' }} />
          </ListImgBox>
          <div style={{ display: 'inline-block' }}>
            <ListText>카테고리 : {item[1]}</ListText>
            <ListText>컬러 : {item[2]}</ListText>

            <LuxuryLinkBtn href={item[3]} target="_blank">
              유사 제품보기
            </LuxuryLinkBtn>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default ResultListBox;

const Container = styled.div`
  display: inline-block;
  margin: auto 0;
  padding-top: 1vh;
  padding-bottom: 1vh;
`;
const ListText = styled.p`
  font-size: 0.6vw;
`;
const ListImgBox = styled.div`
  display: inline-block;
  margin-right: 2vw;
  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 4vw;
  }
`;
const LuxuryLinkBtn = styled.a`
  display: block;
  box-sizing: border-box;

  width: 10vw;
  background: transparent;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-style: normal;
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  color: #323b48;
  /* color: rgba(223, 190, 106, 0.7); */
  border-radius: 0;
  /* padding: 15px 20px 15px 20px; */
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 1vh 0;
  border: none;
  border: 1px solid #323b48;
  /* border: 1px solid rgba(223, 190, 106, 0.3); */
  :hover {
    color: #fff;
    border: 1px solid rgba(223, 190, 106, 0);
    color: $white;
    background-position: 99% 50%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100px;
  }
`;
