import React from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm py-4 position-fixed top-0 w-100 z-2">
        <div className="container">
          <NavLink className="navbar-brand text-white" to="/">
            <h1 className="h3 fw-bold">
              <i class="fa-brands fa-react"></i> START FRAMEWORK
            </h1>
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink to="about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="product">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contactUs">Contact Us </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
