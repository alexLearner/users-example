import React from "react";
import PropTypes from "prop-types";
import User from "./User";
import "./Users.css"

const Users = ({ data }) => (
  <div className="users">
    {
      data.map(user => (
        <User key={user.id} {...user} />
      ))
    }
  </div>
);

Users.defaultProps = {
  data: [],
};

Users.propTypes = {
  data: PropTypes.array,
};

export default Users;