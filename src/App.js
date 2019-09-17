import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './pages/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div css={`
      background: red;
    `}>
      <Header  />
      <Switch>
        <Route exact path='/' component={Home} ></Route>
      </Switch>
    </div>
  );
}

export default App;
