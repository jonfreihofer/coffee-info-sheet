import React from "react";
import { render } from "@testing-library/react";
import NavBar from ".";

describe("NavBar", () => {
  it("Should render", () => {
    const { findByText, asFragment } = render(<NavBar />);

    expect(findByText("Coffee Info Sheet")).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
