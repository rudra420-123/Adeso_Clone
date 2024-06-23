import React from "react";
import "./Reference.css";

function Reference() {
  return (
    <div className="ref">
      <div className="container d-flex">
        <div className="logo">
          <ul className="d-flex py-2">
            <li className="mx-1">
              <i className="fa-brands fa-linkedin"> </i>
            </li>
            <li className="mx-1">
              <i className="fa-brands fa-twitter"> </i>
            </li>
            <li className="mx-1">
              <i className="fa-brands fa-facebook"> </i>
            </li>
            <li className="mx-1">
              <i className="fa-brands fa-youtube"> </i>
            </li>
            <li className="mx-1">
              <i className="fa-brands fa-instagram"> </i>
            </li>
          </ul>
        </div>
        <div className="buttons d-flex py-2">
          <a href="/"> JOIN OUR TEAM </a> <p className="mx-3"> | </p>
          <a href="/"> CONTACT US </a>
        </div>
      </div>
    </div>
  );
}

export default Reference;
