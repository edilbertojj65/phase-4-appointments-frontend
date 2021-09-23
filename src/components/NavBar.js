import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Patients">Patients</NavLink>
      <NavLink to="/Physician">Physician</NavLink>
      
    </div>
  );
}

export default NavBar;