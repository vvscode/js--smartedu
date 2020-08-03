import React from "react";
import Header from "../../components/Header";
import { Link, Switch, Route } from "react-router-dom";
import MyCourses from "./MyCourses";
import ResetToken from "./ResetToken";

export default class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="container mt-3">
          <ul>
            <li>
              <Link to="/profile/my-courses">My Courses</Link>
            </li>
            <li>
              <Link to="/profile/reset-token">Change token</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/profile/my-courses" exact component={MyCourses} />
            <Route path="/profile/reset-token" component={ResetToken} />
          </Switch>
        </main>
      </>
    );
  }
}
