import { Link } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./context";
import { Navigate, useNavigate } from "react-router-dom";

const Nav = () => {
  const { setIsLoggedIn } = useContext(myContext);
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="logo-container">
        <h1>Logo</h1>
      </div>
      <div className="menu-container">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About us</Link>
        </div>
        <div>
          <Link to="/tech">Technology</Link>
        </div>
        <div
          onClick={() => {
            setIsLoggedIn(false);
            navigate("/");
          }}
          style={{ color: "red" }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Nav;
