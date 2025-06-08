import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="store_name">OffersMart</h1>
      <div className="nav_links">
        <Link  className="nav_span" to="./recipes">
          <span>Recipes</span>
        </Link>
        <Link  className="nav_span" to="./products">
          <span> Products</span>
        </Link>
        <Link className="nav_span" to="./users">
          <span>Users</span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
