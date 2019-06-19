import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, queryByText } from "@testing-library/react";
import App from "./App";
import "@testing-library/react/cleanup-after-each";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without errors", () => {
    const queries = render(<App />);
    // if there are errors rendering the component, the tests will fail
  });

  it("find the text hello world", () => {
    const { getByText } = render(<App />);
    getByText(/hello world/i);
  });

  describe("Greet Button", () => {
    it("button click says hello developers", () => {
      // find the button
      const { getByText, queryByText } = render(<App />);
      const button = getByText(/greet/i);
      // click it
      fireEvent.click(button);

      // confirm that "hello developers" is on the page
      // getByText(/hello developers/i);
      expect(queryByText(/hello developers/i)).toBeTruthy();
    });
  });
});

// show an h2 with Hello World
