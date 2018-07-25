import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="container header_container">
      <Link className="header_logo" to="/">UList</Link>

      <nav className="header_nav">
        <Link className="header_nav_item" to="/">Users</Link>
        <Link className="header_nav_item" to="/create">Create profile</Link>
        <Link className="header_nav_item" to="/upload">Upload</Link>
      </nav>
    </div>
  </header>
);

export default Header;