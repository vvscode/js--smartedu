import React from "react";
import MainPage from "./Main";
import * as api from "../api";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router";

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
  it("requests new courses on render", () => {
    api.getCourses.mockResolvedValueOnce([]);
    render(
      <Router>
        <MainPage />
      </Router>
    );
    expect(api.getCourses).toHaveBeenCalled();
  });

  it("renders loaded courses", async () => {
    api.getCourses.mockResolvedValueOnce([makeCourse(1), makeCourse(2)]);
    const wrapper = render(
      <Router>
        <MainPage />
      </Router>
    );
    await api.getCourses();
    expect(wrapper).toMatchSnapshot();
  });
});
