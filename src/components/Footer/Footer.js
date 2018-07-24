import React from "react";
import Icon from 'antd/lib/icon';
import 'antd/lib/style/index.css';
import './Footer.css';

const Footer = () => (
  <header className="footer">
    <div className="container footer_container">
      <a href="https://github.com/alexLearner/users-example" className="footer_link">
        <Icon type="github" className="footer_icon" />
        GitHub link
      </a>
    </div>
  </header>
);

export default Footer;