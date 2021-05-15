import { Button } from "antd";
import { Link } from "react-router-dom";

function LinkButtons() {
  return (
    <div className="employees__buttons-container">
      <Button className="employees__button">
        <Link to="/">Go to home page</Link>
      </Button>
      <Button className="employees__button">
        <Link to="/counter">Go to counter page</Link>
      </Button>
    </div>
  );
}

export default LinkButtons;
