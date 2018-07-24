import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers } from "../../actions/users";
import Users from "../../components/Users";

class Main extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { fetched, data } = this.props;

    if (!fetched) {
      return <div>Load...</div>
    }

    return (
      <div>
        <Users data={data} />
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
    getUsers: bindActionCreators(getUsers, dispatch)
    // popupActions: bindActionCreators(actions.popup, dispatch),
  }),
)(Main);