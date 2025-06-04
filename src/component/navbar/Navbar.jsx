import "./navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>AmirEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/register" className="register">
              Sign Up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="./menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
