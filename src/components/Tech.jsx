import { Link, Outlet } from "react-router-dom";

import "./Tech.css";
const Tech = () => {
  return (
    <div className="tech-container">
      <h1>Tech component</h1>
      <div className="panel">
        <div className="left-panel">
          <ul>
            <li>
              <Link to="html">HTML</Link>
            </li>
            <li>
              <Link to="css">CSS</Link>
            </li>
            <li>
              <Link to="js">JS</Link>
            </li>
          </ul>
        </div>
        <div className="right-panel">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Tech;
