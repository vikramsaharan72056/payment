import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <ul class="left">
        <li>
          <span style={{ fontSize: "30px" }}>
            <span style={{ color: "#0096FF", fontWeight: "1000" }}>E</span>
            <span style={{ color: "#0089FF", fontWeight: "1000" }}>D</span>
            <span style={{ color: "#0079FF", fontWeight: "1000" }}>Y</span>
            <span style={{ color: "#0070FF", fontWeight: "1000" }}>O</span>
            <span style={{ color: "#0061FF", fontWeight: "1000" }}>D</span>
            <span style={{ color: "#0053FF", fontWeight: "1000" }}>A</span>
          </span>
        </li>
        <li>
          <b>Programs</b>
        </li>
        <li class="list1">
          <b>Programs</b>
        </li>
      </ul>
      <ul class="right">
        <li>
          <img id="img" src=" /Search Icon.jpeg" alt="search-icon" />
        </li>
        <li class="list2">
          <b>Login</b>
        </li>
        <li class="list2">
          <div class="btn">
            <b>Join Now</b>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
