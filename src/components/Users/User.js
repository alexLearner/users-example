import React from "react";
import PropTypes from "prop-types";
import Card from "antd/lib/card";
import "antd/lib/card/style/index.css";
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';

const User = ({ id, avatar, first_name, last_name, remove }) => (
  <Card
    className="users_item"
    cover={<img src={avatar} alt="" />}
    hoverable
  >
    <div className="users_item_name">{first_name}, {last_name}</div>

    <div className="users_item_buttons">
      <Button
        className="users_item_button"
        type="dashed"
      >
        Edit
      </Button>

      <Button
        className="users_item_button"
        onClick={() => remove(id)}
        type="danger"
      >
        Delete
      </Button>
    </div>
  </Card>
);

User.defaultProps = {
  avatar: 'https://cdn.dribbble.com/users/264/screenshots/1035073/untitled-2.jpg',
};

User.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  remove: PropTypes.func.isRequired,
};

export default User;