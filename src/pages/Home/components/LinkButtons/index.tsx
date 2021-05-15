import { Button } from "antd";
import { Link } from "react-router-dom";

const LinkButtons = () => {
  return (
    <div className="home__buttons-container">
      <Button className="home__button">
        <Link to="/counter">Go to counter page</Link>
      </Button>
      <Button className="home__button">
        <Link to="/employees">Go to employees page</Link>
      </Button>
    </div>
  );
};

export default LinkButtons;
