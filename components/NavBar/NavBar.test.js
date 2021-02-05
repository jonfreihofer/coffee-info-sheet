import React from "react";
import { render } from "@testing-library/react";
import NavBar from ".";

/* 
  React-testing-library is used for testing react components
  This is different than testing javascript functions

  More info and exmaples on testing can be found here:
  https://testing-library.com/docs/react-testing-library/example-intro
*/

describe("NavBar", () => {
  it("Should render", () => {
    // React testing library provides utility functions to execute on your component
    // findByText will search your component for text
    // asFragment creates a copy of the dom so you can compare against the previous version
    // This is called a snapshot

    // There are others such as getByText, getByTestId, etc
    // Others can be found at the link above

    // One important one is `debug`
    // const { debug } = render(<NavBar />);
    // debug()

    // Then run `npm run test` from the terminal

    const { findByText, asFragment } = render(<NavBar />);

    expect(findByText("Coffee Info Sheet")).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
