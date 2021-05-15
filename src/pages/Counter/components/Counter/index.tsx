import { Button } from "antd";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <p className="counter__number">{counter}</p>

      <div className="counter__number--buttons">
        <Button
          className="counter__number--button"
          onClick={function () {
            setCounter(counter + 1);
          }}
        >
          Increase
        </Button>
        <Button
          className="counter__number--button"
          onClick={function () {
            setCounter(0);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Counter;
