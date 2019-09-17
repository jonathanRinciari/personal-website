import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './pages/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div css={`
      background: #F9F4ED;
      height: 100%;
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 6fr;
      grid-template-areas: ". . Header Header Header . ." ". . Content Content Content . .";
    `}>
      <div css={`grid-area: Header; display: flex; align-items: center;`}>
        <Header  />
      </div>
      <div css={`grid-area: Content`}>
      <Switch>
        <Route exact path='/' component={Home} ></Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
