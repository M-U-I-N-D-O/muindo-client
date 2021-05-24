import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import TopComment from '../../components/AnalysisClothes/topComment';

import './carousel.css';

function Solution() {
  const comment = '당신의 스타일 취향기반으로 멋있는 룩을 추천해보겠습니다.';

  const [nav, setNav] = useState();
  const slider = useRef();
  const settings = {
    dots: true,
    Infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    focusOnSelect: true,
    speed: 500,
  };
  // function next() {
  //   this.slider.slickNext();
  // }
  return (
    <Container>
      <TopComment comment={comment} />
      <div className="carousel" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* <h2 style={{ textAlign: 'center' }}>OnClick Slider</h2> */}
        <Slider ref={slider} {...settings}>
          <SliderContainer>
            <ContentsText>성별을 선택해주세요.</ContentsText>
            <SlideBox>
              <ContentButton
                onClick={() => {
                  console.log('남성버튼');
                  slider.current.slickNext();
                }}
              >
                <SlideItemBox>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ margin: '0 auto' }} src="/images/solution/man.png" alt="man-img" />
                    <ContentsText>남성</ContentsText>
                  </div>
                </SlideItemBox>
              </ContentButton>
              <ContentButton
                onClick={() => {
                  console.log('여성버튼');
                  slider.current.slickNext();
                }}
              >
                <SlideItemBox>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ margin: '0 auto' }} src="/images/solution/girl.png" alt="girl-img" />
                    <ContentsText>여성</ContentsText>
                  </div>
                </SlideItemBox>
              </ContentButton>
            </SlideBox>
          </SliderContainer>
          <SliderContainer>
            <ContentsText>선호하는 스타일을 골라주세요.</ContentsText>
            <SlideBox></SlideBox>
          </SliderContainer>
        </Slider>
      </div>
    </Container>
  );
}

export default Solution;

const Container = styled.div``;
const SliderContainer = styled.div`
  height: 50vh;
  /* border: 2px solid black; */
`;
const SlideBox = styled.div`
  display: flex;
  justify-content: center;
`;
const SlideItemBox = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  /* margin: 0 1vw; */
  /* border: 2px solid black; */
  align-items: center;
`;
const ContentButton = styled.button`
  background-color: none;
  width: 300px;
  height: 300px;
  margin: 0 1vw;
  &:hover {
    background-color: #e2b063;
  }
`;
const ContentsText = styled.h2`
  text-align: center;
  margin: 2vh 0;
`;
