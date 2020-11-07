import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  it("renders correctly", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper).toMatchSnapshot();
  });
});
