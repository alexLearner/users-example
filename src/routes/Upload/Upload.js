import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { setUsers } from "../../actions/users";
import Title from "../../components/Title";
import Fileload from "../../components/Fileload";
import "./Upload.css";

const JSON_FORMAT_STRING = `[
  {
    id: <i>Number</i>,
    first_name: <i>String</i>,
    last_name: <i>String</i>,
    avatar: <i>String</i>,
  },
  ...
]`;

const UPLOAD_REDIRECT_DELAY = 1500;

class Upload extends Component {
  uploadJSON = (data) => {
    const { history, setUsers } = this.props;

    setUsers(data);

    setTimeout(() => history.push("/"), UPLOAD_REDIRECT_DELAY);
  };

  render() {
    return (
      <div className="upload">
        <Title className="upload_title">Upload JSON</Title>
        <p>Your need load JSON in format:</p>
        <pre>
          <code dangerouslySetInnerHTML={{__html: JSON_FORMAT_STRING}} />
        </pre>

        <Fileload onChange={this.uploadJSON} />
      </div>
    )
  }
}

Upload.propTypes = {
  fetched: PropTypes.bool,
  data: PropTypes.array,
};

export default withRouter(connect(
  state => ({
    data: state.users.data,
    fetched: state.users.fetched,
  }),
  dispatch => ({
    setUsers: bindActionCreators(setUsers, dispatch)
  })
)(Upload));