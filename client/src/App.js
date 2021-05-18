import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Intro from './pages/Intro';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Intro} />
      </Switch>
    </Router>
  );
}

export default App;
