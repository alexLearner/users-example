import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Spin from 'antd/lib/spin';
import Users from "../../components/Users/Users";
import { removeUser } from "../../actions/users";

class Main extends Component {
  render() {
    const { fetched, data, removeUser } = this.props;

    if (!fetched) {
      return <div> Loading <Spin /></div>
    }

    return (
      <div className="main">
        <Users data={data} removeUser={removeUser} />
      </div>
    )
  }
}

Main.propTypes = {
  fetched: PropTypes.bool,
  data: PropTypes.array,
  removeUser: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    data: state.users.data,
    fetched: state.users.fetched,
  }),
  dispatch => ({
    removeUser: bindActionCreators(removeUser, dispatch)
  })
)(Main);