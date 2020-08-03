import React from "react";
import { MemoryRouter as Router } from "react-router";
import { render } from "@testing-library/react";
import { createStore } from "../rdx/createStore";
import { Provider } from "react-redux";

export const renderForTest = (children, preloadedState) => {
  const store = createStore(preloadedState);
  const wrapper = render(
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
  return { store, wrapper };
};
