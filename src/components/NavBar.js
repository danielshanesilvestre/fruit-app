import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  return <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/fruits">Fruits</NavLink>
    <NavLink to="/fruits/new">Submit a new fruit</NavLink>
  </nav>
}


export default NavBar;