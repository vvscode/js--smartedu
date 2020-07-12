import React from "react";
import Header from "../components/Header";
import CoursesList from "../components/CoursesList";

import * as api from "../api";

export default class Main extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    api.getCourses().then((courses) => {
      this.setState({ courses });
    });
  }

  render() {
    return (
      <>
        <Header />
        <main className="container mt-3">
          <CoursesList courses={this.state.courses} />
        </main>
      </>
    );
  }
}
