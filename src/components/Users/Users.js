import React from "react";
import PropTypes from "prop-types";
import User from "./User";
import "./Users.css"

const Users = ({ data, removeUser }) => (
  <div className="users">
    {
      data.map(user => (
        <User key={user.id} removeUser={removeUser} {...user} />
      ))
    }
  </div>
);

Users.defaultProps = {
  data: [],
  removeUser: PropTypes.func.isRequired,
};

Users.propTypes = {
  data: PropTypes.array,
};

export default Users;