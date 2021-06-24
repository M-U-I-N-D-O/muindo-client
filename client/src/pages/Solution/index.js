import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { solutionGender } from '../../actions';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-slick';
import StylesSelecter from '../../components/Solution/stylesSelecter';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const PAGE_NUMBER = 1;

function Solution() {
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
      <div className="carousel" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Slider ref={sliderRef} {...settings}>
          <SliderContainer>
            <ContentsText>성별을 선택해주세요.</ContentsText>
            <SlideBox>
              <SlideItemBox>
                <Paper style={{ margin: '10px' }} elevation={7}>
                  <ContentButton onClick={onClickNext(sliderRef, '남성')}>
                    <GenderBox>
                      <GenderImg src="/images/solution/man.png" alt="man-img" />
                      <GenderText>남성</GenderText>
                    </GenderBox>
                  </ContentButton>
                </Paper>
              </SlideItemBox>
              <SlideItemBox>
                <Paper style={{ margin: '10px' }} elevation={7}>
                  <ContentButton onClick={onClickNext(sliderRef, '여성')}>
                    <GenderBox>
                      <GenderImg src="/images/solution/girl.png" alt="girl-img" />
                      <GenderText>여성</GenderText>
                    </GenderBox>
                  </ContentButton>
                </Paper>
              </SlideItemBox>
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
          <SliderContainer></SliderContainer>
        </Slider>
      </div>
      {buttonCounter > 1 && (
        <SubmitBox>
          <SubmitButton
            elevation={4}
            onClick={() => {
              getCheckBoxValue();
              history.push('/loading');
              setTimeout(function () {
                history.push('/solution/result');
              }, 3000);
            }}
          >
            <SubmitText>추천 룩 보기 👗</SubmitText>
          </SubmitButton>
        </SubmitBox>
      )}
    </Container>
  );
}

export default Solution;

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;
const ContentsText = styled.h2`
  text-align: center;
  margin: 3vh 0 1vh 0;
  font-size: 18px;
`;
const SliderContainer = styled.div`
  height: 100vh;
  overflow: auto;
`;
const SlideBox = styled.div``;
const SlideItemBox = styled.div`
  display: flex;
  justify-content: center;
`;
const ContentButton = styled.button`
  background-color: none;
  width: 70vw;
  height: 55vw;
  /* margin: 2vh 0; */
  &:hover {
    background-color: #e2b063;
  }
`;
const GenderBox = styled.div``;
const GenderImg = styled.img`
  width: 100px;
  margin: 0 auto;
`;
const GenderText = styled.h2`
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 0;
`;
const SubmitBox = styled.div`
  position: absolute;
  bottom: 80px;
  width: 100vw;
  text-align: center;
`;
const SubmitButton = styled(Paper)`
  width: 170px;
  margin: 0 auto;
  background-color: #ffff97;
`;
const SubmitText = styled.h2`
  padding: 10px;
  font-size: 18px;
`;
