import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";


import Header from "./pages/Header/Header";
import HeaderNav from "./components/HeaderNav";
import AppRouter from "./Router";

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
         <AppRouter />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
