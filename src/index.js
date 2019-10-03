import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "react-router-scroll-top";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

ReactGA.initialize("UA-149353833-1");
ReactGA.pageview("/");

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <Router render={() => window.scrollTo(0, 0)} history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
