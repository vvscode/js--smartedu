import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./pages/Main";
import CoursePage from "./pages/CoursePage";
import ApplicationPage from "./pages/ApplicationPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/course/:courseId" component={CoursePage} />
        <Route path="/apply/group/:groupId" component={ApplicationPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
