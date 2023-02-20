/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="" to="/">
              Watch
            </Link>
            <Link to="/">Share</Link>
            <Link to="/">Rewards</Link>
            <Link className="active" to="/">
              Join or Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
