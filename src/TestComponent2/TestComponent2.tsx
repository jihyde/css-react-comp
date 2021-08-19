import React from "react";

import { TestComponent2Props } from "./TestComponent2.types";

import "./TestComponent2.scss";

const TestComponent2: React.FC<TestComponent2Props> = ({ theme }) => (
  <div
    data-testid="test-component-2"
    className={`test-component-2 test-component-2-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default TestComponent2;
