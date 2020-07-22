import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import * as api from "../api";

export default class CoursePage extends React.Component {
  state = {
    group: {},
  };

  componentDidMount() {
    api
      .getGroup(this.props.match.params.groupId)
      .then((group) => {
        this.setState({ group });
      })
      .catch(() => {
        this.props.history.goBack();
      });
  }

  onFormSubmit = (ev) => {
    ev.preventDefault();
    const note = ev.target.querySelector("#note").value;

    api
      .sendApplication({
        note,
        groupId: this.state.group.id,
      })
      .then(() => {
        alert("Ваша заявка принята");
        this.props.history.push(`/course/${this.state.group.course.id}`);
      });
  };

  render() {
    const { group } = this.state;
    return (
      <>
        <Header />
        <main className="container mt-3">
          <h1>Вы хотите записаться в группу {group?.title}?</h1>
          <h2>Курс {group?.course?.title}</h2>
          <div>{group.details}</div>
          <form onSubmit={this.onFormSubmit}>
            <textarea
              required
              id="note"
              placeholder="Почему вам интересен этот курс?"
              style={{ width: "100%", minHeight: "200px" }}
            ></textarea>
            <br />
            <button type="submit">Отправить заявку</button>
          </form>
        </main>
      </>
    );
  }
}
