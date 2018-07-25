import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Users from "../../components/Users/Users";
import { removeUser } from "../../actions/users";

class Main extends Component {
  render() {
    const { fetched, data, removeUser } = this.props;

    if (!fetched) {
      return <div>Load...</div>
    }

    return (
      <div>
        <Users data={data} removeUser={removeUser} />
      </div>
    )
  }
}

Main.propTypes = {
  fetched: PropTypes.bool,
  data: PropTypes.array,
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