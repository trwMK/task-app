import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ onShowAddTask, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>Task tracker App</h1>
      {location.pathname === "/" && (
        <Button color={showAdd ? "red" : "green"} onClick={onShowAddTask}>
          {showAdd ? "Close" : "Add"}
        </Button>
      )}
    </header>
  );
};

export default Header;
