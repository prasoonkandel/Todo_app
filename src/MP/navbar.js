import { Link } from "react-router-dom";
const NAVBAR = () => {
  return (
    <>
      <div className="nav_bar">
        <div className="version">TO DO V2</div>
        <div className="menu_items">
          <Link to="/">
            <div>HOME</div>
          </Link>
          <Link to="/add">
            <div>ADD TODO</div>
          </Link>
          <Link to="/log">
            <div>LOG-IN</div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NAVBAR;
