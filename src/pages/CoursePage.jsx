import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import * as api from "../api";

export default class CoursePage extends React.Component {
  state = {
    course: {},
  };

  componentDidMount() {
    api.getCourse(this.props.match.params.courseId).then((course) => {
      this.setState({ course });
    });
  }

  renderGroups(groups) {
    if (!groups.length) {
      return <h5>Сейчас нет активных наборов на курс</h5>;
    }
    return (
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <Link to={`/apply/group/${group.id}`}>
              Подать заявку в группу {group.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { course } = this.state;
    return (
      <>
        <Header />
        <main className="container mt-3">
          <h1>{course.title}</h1>
          <ul>
            {(course.tags || []).map((el) => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ul>
          <div>{course.description}</div>
          {course.groups ? (
            this.renderGroups(course.groups)
          ) : (
            <h1>Войдите, чтобы увидеть список групп</h1>
          )}
        </main>
      </>
    );
  }
}
