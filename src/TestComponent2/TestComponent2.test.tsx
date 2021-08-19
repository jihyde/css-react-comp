import React from "react";
import { render } from "@testing-library/react";

import TestComponent2 from "./TestComponent2";
import { TestComponent2Props } from "./TestComponent2.types";

describe("Test Component2", () => {
  let props: TestComponent2Props;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderComponent = () => render(<TestComponent2 {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent2 = getByTestId("test-component-2");

    expect(testComponent2).toHaveClass("test-component-2-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const testComponent2 = getByTestId("test-component-2");

    expect(testComponent2).toHaveClass("test-component-2-secondary");
  });
});
