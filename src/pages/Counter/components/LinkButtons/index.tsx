import { Button } from "antd";
import { Link } from "react-router-dom";

function LinkButtons() {
  return (
    <div className="counter__buttons-container">
      <Button className="counter__button">
        <Link to="/">Go to home page</Link>
      </Button>
      <Button className="counter__button">
        <Link to="/employees">Go to employees page</Link>
      </Button>
    </div>
  );
}

export default LinkButtons;
