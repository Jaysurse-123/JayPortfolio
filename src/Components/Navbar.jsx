import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className="logo">
        J<span>.</span>S
      </NavLink>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/skills">Skills</NavLink>

        <NavLink to="/projects">Projects</NavLink>

        <NavLink to="/education">Education</NavLink>

        <NavLink to="/certificates">Certificates</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </div>

      <NavLink to="/contact" className="nav-button">
        Let's Talk
      </NavLink>

    </nav>
  );
}

export default Navbar;