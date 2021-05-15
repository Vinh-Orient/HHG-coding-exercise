import React from "react";
import Counter from "./components/Counter";
import LinkButtons from "./components/LinkButtons";

const CounterPage = () => {
  return (
    <div className="counter">
      <h1>Counter page</h1>
      <Counter />
      <LinkButtons />
    </div>
  );
};

export default CounterPage;
