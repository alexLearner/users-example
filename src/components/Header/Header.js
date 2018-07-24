import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Card from "antd/lib/card";
// import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
// import "antd/lib/menu/style/index.css";
// import Button from 'antd/lib/button';
// import 'antd/lib/button/style/index.css';

// const { Content, Footer } = Layout;

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