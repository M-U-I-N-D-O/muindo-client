import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Intro from './pages/Intro';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
