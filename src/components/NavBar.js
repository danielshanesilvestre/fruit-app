import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/fruits">Fruits</NavLink>
    <NavLink to="/fruits/new">Submit a new fruit</NavLink>
  </div>
}


export default NavBar;