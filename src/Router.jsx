import React, { Component } from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Project from "./pages/Project/Project";
import Projects from "./pages/Projects/Projects";
import Writing from "./pages/Writing/Writing";
import Writings from "./pages/Writings/Writings";
import ErrorPage from "./pages/404/404";


export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/projects/:title" component={Project}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/writing/:title" component={Writing}></Route>
        <Route path="/writing" component={Writings}></Route>
        <Route path="/404" component={ErrorPage}></Route>
        <Redirect from="*" to="/404" />
      </Switch>
    );
  }
}
