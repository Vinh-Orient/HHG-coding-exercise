import { Button } from "antd";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p className="counter__number">{counter}</p>

      <div className="counter__number--buttons">
        <Button
          className="counter__number--button"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </Button>
        <Button
          className="counter__number--button"
          onClick={() => setCounter(0)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
