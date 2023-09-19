import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white" style={{color: "black"}}>
          <a href="#" className="brand-logo left">
            Instagram
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
              <li>
              <Link to="/create">Post</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
