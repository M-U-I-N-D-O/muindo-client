import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import './resultslider.css';

function ResultSlider() {
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
    ['/images/solution/girl.png', 'girl4'],
    ['/images/solution/man.png', 'man5'],
    ['/images/solution/girl.png', 'girl5'],
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
    asNavFor: '.slider-nav',
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="slider-wrapper">
        <Slider {...settingsMain} asNavFor={nav2} ref={(slider) => setSlider1(slider)}>
          {slidesData.map((slide, index) => (
            <SlideContainer key={index}>
              <SlideBox>
                <SlideButton onClick={() => console.log('클릭')}>
                  <SlideItemBox>
                    <div>
                      <img src={`${slide[0]}`} alt={`${slide[1]}`} />
                      <label className="slick-slide-label">{slide[1]}</label>
                    </div>
                    {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
                  </SlideItemBox>
                </SlideButton>
              </SlideBox>
            </SlideContainer>
          ))}
          <SlideButton onClick={() => console.log('클릭')}>
            <SlideContainer>
              <h1>LAST</h1>
            </SlideContainer>
          </SlideButton>
        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider {...settingsThumbs} asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
            {slidesData.map((slide, index) => (
              <SlideBox key={index}>
                <ThumbnailSlideBox>
                  <img className="slick-slide-image" src={`${slide[0]}`} alt={`${slide[1]}`} width="50px" height="80px" />
                </ThumbnailSlideBox>
              </SlideBox>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
  //   const settings = {
  //     customPaging: function () {
  //       return (
  //         <a>
  //           <img src={`/images/solution/man.png`} alt={`/images/solution/man.png`} width="40px" />
  //         </a>
  //       );
  //     },
  //     dots: true,
  //     dotsClass: 'slick-dots slick-thumb',
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  //   return (
  //     <div className="carousel" style={{ maxWidth: '900px', margin: '0 auto' }}>
  //       <Slider {...settings}>
  //         <SlideContainer>
  //           <SlideBox>
  //             <SlideItemBox>
  //               <img src={`/images/solution/man.png`} alt="man-png" />
  //             </SlideItemBox>
  //           </SlideBox>
  //         </SlideContainer>
  //         <SlideContainer>
  //           <SlideBox>
  //             <SlideItemBox>
  //               <img src={`/images/solution/man.png`} alt="man-png" />
  //             </SlideItemBox>
  //           </SlideBox>
  //         </SlideContainer>
  //         <SlideContainer>
  //           <SlideBox>
  //             <SlideItemBox>
  //               <img src={`/images/solution/man.png`} alt="man-png" />
  //             </SlideItemBox>
  //           </SlideBox>
  //         </SlideContainer>
  //         <SlideContainer>
  //           <SlideBox>
  //             <SlideItemBox>
  //               <img src={`/images/solution/man.png`} alt="man-png" />
  //             </SlideItemBox>
  //           </SlideBox>
  //         </SlideContainer>
  //       </Slider>
  //     </div>
  //   );
}

export default ResultSlider;

const SlideContainer = styled.div`
  height: 380px;
`;
const SlideBox = styled.div`
  display: flex;
  justify-content: center;
`;
const SlideItemBox = styled.div`
  display: flex;
  width: 220px;
  height: 330px;
  /* border: 2px solid black; */
  justify-content: center;
  align-items: center;
`;
const SlideButton = styled.button`
  background-color: white;
  width: 225px;
  height: 335px;
  border: 2px solid black;
  &:hover {
    background-color: #e2b063;
  }
`;
const ThumbnailSlideBox = styled.div`
  display: flex;
  width: 220px;
  height: 100px;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
