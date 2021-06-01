import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { solutionGender } from '../../actions';

import styled from 'styled-components';

import Slider from 'react-slick';
import TopComment from '../../components/AnalysisClothes/topComment';
import StylesSelecter from '../../components/Solution/stylesSelecter';

import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const PAGE_NUMBER = 1;

function Solution() {
  const comment = '당신의 스타일 취향기반으로 멋있는 룩을 추천해보겠습니다.';
  const dispatch = useDispatch();
  const buttonCounter = useSelector((state) => state.solution.count);
  const history = useHistory();
  const [slider, setSlider] = useState(null);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    Infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // focusOnSelect: true,
    // swipe: false,
    speed: 500,
  };

  const [styleList, setStyleList] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    try {
      axios.get('http://localhost:3000/data/solution.json').then((response) => {
        console.log('page :', page);
        setStyleList([...styleList, ...response.data.data]);
      });
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  const scrollToEnd = () => {
    console.log('마지막');
    setTimeout(() => {
      setPage(page + 1);
    }, 1000);
  };

  useEffect(() => {
    setSlider(sliderRef.current);
  }, []);

  const onClickNext = useCallback(
    (ref, name) => () => {
      console.log(name);
      // 클릭한 성별 Redux에 저장
      dispatch(solutionGender(name));
      ref.current.slickNext();
    },
    [],
  );
  const getCheckBoxValue = () => {
    const query = 'input[name="style"]:checked';
    const selectedEls = document.querySelectorAll(query);

    let result = '';
    selectedEls.forEach((el) => {
      result += el.value + ' ';
    });

    console.log('result :', result);
  };

  return (
    <Container>
      <TopComment comment={comment} />
      <div className="carousel" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Slider ref={sliderRef} {...settings}>
          <SliderContainer>
            <ContentsText>성별을 선택해주세요.</ContentsText>
            <SlideBox>
              <ContentButton onClick={onClickNext(sliderRef, '남성')}>
                <SlideItemBox>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ margin: '0 auto' }} src="/images/solution/man.png" alt="man-img" />
                    <ContentsText>남성</ContentsText>
                  </div>
                </SlideItemBox>
              </ContentButton>
              <ContentButton onClick={onClickNext(sliderRef, '여성')}>
                <SlideItemBox>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ margin: '0 auto' }} src="/images/solution/girl.png" alt="girl-img" />
                    <ContentsText>여성</ContentsText>
                  </div>
                </SlideItemBox>
              </ContentButton>
            </SlideBox>
          </SliderContainer>
          <SliderContainer id="scrollableDiv">
            <InfiniteScroll
              dataLength={styleList.length}
              next={() => scrollToEnd()}
              hasMore={true}
              loader={<h1 style={{ textAlign: 'center' }}>Loading..🕵️‍♂️</h1>}
              scrollableTarget="scrollableDiv"
            >
              <ContentsText>선호하는 스타일을 골라주세요.</ContentsText>
              <SlideBox>
                <StylesSelecter styleList={styleList} />
              </SlideBox>
            </InfiniteScroll>
          </SliderContainer>
          <SliderContainer>
            <h1>Hi~</h1>
          </SliderContainer>
        </Slider>
      </div>
      {buttonCounter > 0 && (
        <div style={{ textAlign: 'center', paddingTop: '5vh' }}>
          <LuxuryBtn
            onClick={() => {
              getCheckBoxValue();
              history.push('/loading');
              setTimeout(function () {
                history.push('/solution/result');
              }, 3000);
            }}
          >
            결과보기
          </LuxuryBtn>
        </div>
      )}
    </Container>
  );
}

export default Solution;

const Container = styled.div``;
const SliderContainer = styled.div`
  height: 450px;
  /* border: 2px solid black; */
  overflow: auto;
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

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  width: 220px;
  /* width: 15vw; */
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  color: #323b48;
  /* color: rgba(223, 190, 106, 0.7); */
  border-radius: 0;
  padding: 15px 20px 15px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 1px solid #323b48;
  /* border: 1px solid rgba(223, 190, 106, 0.3); */
  :hover {
    color: #fff;
    border: 1px solid rgba(223, 190, 106, 0);
    color: $white;
    background-position: 99% 50%;
  }
`;
