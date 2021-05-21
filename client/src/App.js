import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import AnalysisClothes from './pages/AnalysisClothes';
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

function App() {
  const navMode = useSelector((state) => state.navbar.switch);
  return (
    <Router>
      {navMode === 1 && <Navbar />}
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/analysis_clothes" component={AnalysisClothes} />
        <Route exact path="/analysis_color" component={AnalysisColor} />
        <Route exact path="/closet" component={Closet} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/solution" component={Solution} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/loading" component={Progress} />
      </Switch>
      {navMode === 1 && <Footer />}
    </Router>
  );
}

export default App;