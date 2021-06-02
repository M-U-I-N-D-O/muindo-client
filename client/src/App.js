import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createContext, useState } from 'react';

import Intro from './pages/Intro';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import About from './pages/About';
import AnalysisClothes from './pages/AnalysisClothes';
import AnalysisClothesResult from './pages/AnalysisClothes/AnalysisClothesResult';
import AnalysisColor from './pages/AnalysisColor';

import Community from './pages/Community';
import Solution from './pages/Solution';
import SolutionResult from './pages/Solution/solutionResult';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import TopNav from './components/Navbar/topNav';
import BottomNav from './components/Navbar/bottomNav';
import Footer from './components/Footer';
import Progress from './components/Progress';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const Container = styled.div``;

function App() {
  const navMode = useSelector((state) => state.navbar.switch);

  return (
    <Container>
      <Router>
        {navMode === 1 && <TopNav />}
        <Route exact path="/" component={Intro} />
        <Route exact path="/main" component={Main} />
        <Route exact component={MyPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/analysis_clothes" component={AnalysisClothes} />
        <Route exact path="/analysis_clothes/result" component={AnalysisClothesResult} />
        <Route exact path="/analysis_color" component={AnalysisColor} />

        <Route exact path="/community" component={Community} />
        <Route exact path="/solution" component={Solution} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/loading" component={Progress} />
        {navMode === 1 && <BottomNav />}
        {/* {navMode === 1 && <Footer />} */}
      </Router>
    </Container>
  );
}

export default App;
