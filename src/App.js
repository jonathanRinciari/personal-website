import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import HeaderNav from "./components/HeaderNav";
import About from "./pages/About/About";

function App() {
  const [showMenu, setMenuState] = useState(false);
  return (
    <div
      css={`
        background: #f9f4ed;
        height: 100%;
        min-height: 100vh;
        display: grid;
        grid-template-rows: 0.5fr 6fr;
        @media (max-width: 767px) {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-template-areas: ". Header Header Header Header Header ." ". Content Content Content Content Content .";
        }
        @media (min-width: 768px) {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-template-areas: ". Header Header Header Header Header ." ". Content Content Content Content Content .";
        }
        @media (min-width: 1200px) {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-template-areas: ". . Header Header Header Header Header . ." ". . Content Content Content Content Content . .";
        }
      `}
    >
      <div
        css={`
          grid-area: Header;
          display: flex;
          align-items: center;
          @media (max-width: 767px) {
            height: 125px;
          }
          @media (min-width: 768px) {
            height: 140px;
          }
          @media (min-width: 1200px) {
            height: 148px;
          }
        `}
      >
        <Header handleOnClick={() => setMenuState(prevState => !prevState)} />
      </div>
      <HeaderNav
        show={showMenu}
        handleOnClose={() => setMenuState(prevState => !prevState)}
      />
      <div
        css={`
          grid-area: Content;
        `}
      >
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
