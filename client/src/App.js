import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import AnalysisClothes from './pages/AnalysisClothes';
import AnalysisClothesResult from './pages/AnalysisClothes/AnalysisClothesResult';
import AnalysisColor from './pages/AnalysisColor';
import Closet from './pages/Closet';
import Community from './pages/Community';
import Solution from './pages/Solution';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Progress from './components/Progress';
import './App.css';

// 중앙 영역 max-width를 768px로 설정할 경우

const Root = styled.div`
  height: 100vh;
  background-image: url(${'/images/home/sherlock_wall.png'});
  background-size: cover;
`;

const Container1 = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding-bottom: 3.5rem;
  background-color: white;
  width: 80vw;
  max-width: 1024px;
`;

// 수정 전 원본

const Container = styled.div`
  padding-top: 5rem;
  padding-bottom: 3.5rem;
  justify-content: center;
  align-items: center;
`;

function App() {
  const navMode = useSelector((state) => state.navbar.switch);
  return (
    <Router>
      {navMode === 1 && <Navbar />}

      <Switch>
        <Route exact path="/" component={Intro} />
        <Root>
          <Container1>
            <ContentsBox>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/analysis_clothes" component={AnalysisClothes} />
              <Route exact path="/analysis_clothes/result" component={AnalysisClothesResult} />
              <Route exact path="/analysis_color" component={AnalysisColor} />
              <Route exact path="/closet" component={Closet} />
              <Route exact path="/community" component={Community} />
              <Route exact path="/solution" component={Solution} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/loading" component={Progress} />
            </ContentsBox>
          </Container1>
        </Root>

        {/* <Container>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/analysis_clothes" component={AnalysisClothes} />
          <Route exact path="/analysis_clothes/result" component={AnalysisClothesResult} />
          <Route exact path="/analysis_color" component={AnalysisColor} />
          <Route exact path="/closet" component={Closet} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/solution" component={Solution} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/loading" component={Progress} />
        </Container> */}
      </Switch>

      {navMode === 1 && <Footer />}
    </Router>
  );
}

export default App;
