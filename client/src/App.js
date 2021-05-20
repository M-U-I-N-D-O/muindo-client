import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import AnalysisClothes from './pages/AnalysisClothes';
import AnalysisColor from './pages/AnalysisColor';
import Closet from './pages/Closet';
import Community from './pages/Community';
import Solution from './pages/Solution';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/analysis_clothes" component={AnalysisClothes} />
        <Route exact path="/analysis_color" component={AnalysisColor} />
        <Route exact path="/closet" component={Closet} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/solution" component={Solution} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
