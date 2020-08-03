import React from "react";
import CoursesList from "../../components/CoursesList";

import * as api from "../../api";

export default class MyCourses extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    api.getUserCourses().then((courses) => {
      this.setState({ courses });
    });
  }

  render() {
    return (
      <>
        <h1>Your courses:</h1>
        <CoursesList courses={this.state.courses} />
      </>
    );
  }
}
