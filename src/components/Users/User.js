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
    <div>{first_name}, {last_name}</div>

    <div>
      <Button type="dashed">Edit</Button>
      <Button
        onClick={() => remove(id)}
        type="danger"
      >
        Delete
      </Button>
    </div>
  </Card>

  // <div className="user">
  //   <img src={avatar} alt="" />
  //   <div>{first_name}, {last_name}</div>
  //   <div>Test</div>
  // </div>
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