import React from "react";

import { TestComponent2Props } from "./TestComponent2.types";

import "./TestComponent2.scss";

const TestComponent2: React.FC<TestComponent2Props> = ({ theme }) => (
  <div
    data-testid="test-component2"
    className={`test-component2 test-component2-${theme}`}
  >
    <h1 className="heading">Test component</h1>
    <h2>Made by Jonah</h2>
  </div>
);

export default TestComponent2;
