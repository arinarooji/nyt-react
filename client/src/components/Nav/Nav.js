import React from "react";
import { Link } from "react-router-dom";
   
//import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle btn btn-outline-primary mr-2"
          data-toggle="collapse"
          data-target=".navbar-ex1-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar fas fa-newspaper" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand" to="/">
          New York Times
        </Link>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/saved">Saved Articles</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;