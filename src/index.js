import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./pages/Main";
import CoursePage from "./pages/CoursePage";
import ApplicationPage from "./pages/ApplicationPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "./rdx/createStore";
import { fetchCurrentUserInfo } from "./rdx/user";

const store = createStore();
store.dispatch(fetchCurrentUserInfo);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/course/:courseId" component={CoursePage} />
          <Route path="/apply/group/:groupId" component={ApplicationPage} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
