import React from "react";

import Header from "./header";
import { renderForTest } from "../utils/test-renders";

describe("Main Page", () => {
  it("it renders unautorized user menu", () => {
    const { wrapper } = renderForTest(<Header />, {
      user: {
        userInfo: null,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("it renders autorized user menu", () => {
    const { wrapper } = renderForTest(<Header />, {
      user: {
        userInfo: {
          token: "some token",
        },
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
