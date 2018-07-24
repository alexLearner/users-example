import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="container header_container">
      <div className="header_logo">UList</div>

      <nav className="header_nav">
        <Link className="header_nav_item" to="/">Users</Link>
        <Link className="header_nav_item" to="/create">Create profile</Link>
        <Link className="header_nav_item" to="/upload">Upload</Link>
      </nav>
    </div>
  </header>
);

export default Header;