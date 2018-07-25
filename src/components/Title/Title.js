import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ children, className }) => (
  <div className={`title ${className}`}>
    {children}
  </div>
);

Title.defaultProps = {
  className: "",
};

Title.propTypes = {
  className: PropTypes.string,
};

export default Title;