import React from "react";
import PropTypes from "prop-types";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import User from "./User";
import localStore from "../../modules/localStore";
import "./Users.css"

const updateEmptyContent = () => {
  localStore.clearAll();
  window.location.reload()
};

const Users = ({ data, removeUser }) => {
  if (!(data && data.length)) {
    return (
      <div className="users users_empty">
        <p>
          There are no users here yet <Icon type="frown"/>
        </p>

        <Button onClick={updateEmptyContent}>
          Clear your local storage for update users
        </Button>
      </div>
    )
  }

  return (
    <div className="users">
      {
        data.map(user => (
          <User
            key={user.id}
            removeUser={removeUser}
            {...user}
          />
        ))
      }
    </div>
  )
};

Users.defaultProps = {
  data: [],
  removeUser: PropTypes.func.isRequired,
};

Users.propTypes = {
  data: PropTypes.array,
};

export default Users;