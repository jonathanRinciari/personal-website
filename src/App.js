import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import HeaderNav from "./components/HeaderNav";
import About from "./pages/About/About";
import ErrorPage from "./pages/404/404";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      }
    })
  }

  render() {
    return (
      <div
        css={`
          background: #f9f4ed;
          height: 100%;
          min-height: 100vh;
          display: grid;
          grid-template-rows: 0.5fr ${this.props.history.location.pathname === '/404' ? '6fr' : 'auto'};
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
          <Header handleOnClick={this.toggleMenu} handleNavigateHome={(url) => this.props.history.push(url)} />
        </div>
        <HeaderNav
          show={this.state.showMenu}
          currentRoute={this.props.history.location.pathname}
          handleOnClose={() => this.toggleMenu()}
        />
        <div
          css={`
            grid-area: Content;
          `}
        >
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/resume" component={Resume}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Redirect from="/writing" to="/404"/>
            <Route path='/404' component={ErrorPage}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
