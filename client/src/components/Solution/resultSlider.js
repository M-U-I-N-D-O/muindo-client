import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { solutionModalMode } from '../../actions';
import Slider from 'react-slick';

import Paper from '@material-ui/core/Paper';
import './resultslider.css';

function ResultSlider() {
  const dispatch = useDispatch();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const slidesData = [
    ['/images/solution/man.png', 'man1'],
    ['/images/solution/girl.png', 'girl1'],
    ['/images/solution/man.png', 'man2'],
    ['/images/solution/girl.png', 'girl2'],
    ['/images/solution/man.png', 'man3'],
    ['/images/solution/girl.png', 'girl3'],
    ['/images/solution/man.png', 'man4'],
    ['/images/solution/solutionresult.png', 'test-image'],
    ['/images/solution/solutionresult.png', 'test-image'],
    ['/images/solution/solutionresult.png', 'test-image'],
    ['/images/solution/solutionresult.png', 'test-image'],
  ];
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    asNavFor: '.slider-nav',
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
  };

  return (
    <Container>
      <div className="slider-wrapper">
        <Slider {...settingsMain} asNavFor={nav2} ref={(slider) => setSlider1(slider)}>
          {slidesData.map((slide, index) => (
            <SlideContainer key={index}>
              <SlideBox>
                <LookPaper
                  elevation={10}
                  onClick={() => {
                    console.log('클릭');
                    dispatch(solutionModalMode(2));
                  }}
                >
                  <SlideItemBox>
                    <img src={`${slide[0]}`} alt={`${slide[1]}`} />
                  </SlideItemBox>
                  <LookLabel className="slick-slide-label">{slide[1]}</LookLabel>
                </LookPaper>
              </SlideBox>
            </SlideContainer>
          ))}
        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider {...settingsThumbs} asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
            {slidesData.map((slide, index) => (
              <SlideBox key={index}>
                <ThumbnailSlideBox>
                  <ThumbnailSlidePaper elevation={4}>
                    <img className="slick-slide-image" src={`${slide[0]}`} alt={`${slide[1]}`} width="90px" height="100px" />
                  </ThumbnailSlidePaper>
                </ThumbnailSlideBox>
              </SlideBox>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
}

export default ResultSlider;

const Container = styled.div`
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 300px;
  }
`;
const SlideContainer = styled.div`
  height: 380px;
`;
const SlideBox = styled.div`
  display: flex;
  justify-content: center;
`;
const SlideItemBox = styled.div`
  display: flex;
  width: 235px;
  height: 335px;
  margin: 0 auto;
  /* border: 10px solid black; */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;
const LookPaper = styled(Paper)`
  background-color: white;
  width: 280px;
  height: 350px;
`;
const LookLabel = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 0;
`;
const ThumbnailSlideBox = styled.div`
  /* display: flex; */
  /* border: 1px solid black; */
  /* width: 220px; */
  /* height: 130px; */
  /* border: 2px solid black; */
  /* justify-content: center; */
  /* align-items: center; */
`;
const ThumbnailSlidePaper = styled(Paper)`
  width: 90px;
  height: 100px;
  margin: 0 1vw;
`;
