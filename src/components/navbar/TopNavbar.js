import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNavbar.css"
const TopNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg   navbar-light bg-light fixed-top " // transparent"
      style={{ marginBottom: "100px" }}
    >

      <a className="navbar-brand" href="/">
        Service Catalog
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/status" className="btn btn-light" >  סטטוס הקמת שירות</NavLink>
          </li>
          <li className="nav-item">

            <NavLink to="/services/restservice/new" className="btn btn-light">חשיפת שירות REST</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services/soapservice/new" className="btn btn-light">חשיפת שירות SOAP</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
