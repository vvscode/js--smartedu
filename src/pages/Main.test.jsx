import React from "react";
import MainPage from "./Main";
import * as api from "../api";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router";
import { createStore } from "../rdx/createStore";
import { Provider } from "react-redux";

jest.mock("../api");

const makeCourse = (id) => ({
  id,
  title: `Title for course #${id}`,
  description: `Description for course #${id}`,
  tags: [...new Array({ length: id })].map(
    (el, index) => `Tag ${index} for course #id`
  ),
});

describe("Main Page", () => {
  let store;
  const renderMainPage = () => {
    store = createStore();
    render(
      <Provider store={store}>
        <Router>
          <MainPage />
        </Router>
      </Provider>
    );
  };

  it("requests new courses on render", () => {
    api.getCourses.mockResolvedValueOnce([]);
    renderMainPage();
    expect(api.getCourses).toHaveBeenCalled();
  });

  it("renders loaded courses", async () => {
    api.getCourses.mockResolvedValueOnce([makeCourse(1), makeCourse(2)]);
    const wrapper = renderMainPage();
    await api.getCourses();
    expect(wrapper).toMatchSnapshot();
  });
});
