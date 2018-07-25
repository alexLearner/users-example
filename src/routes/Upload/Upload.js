import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { setUsers } from "../../actions/users";
import Title from "../../components/Title";
import Fileload from "../../components/Fileload";
import "./Upload.css";

const UPLOAD_REDIRECT_DELAY = 1500;
const JSON_FORMAT_STRING = `[
  {
    id: <i>Number</i>,
    first_name: <i>String</i>,
    last_name: <i>String</i>,
    avatar: <i>String</i>,
  },
  ...
]`;

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
        <p>To load a list of users, you must add a valid JSON file in the format:</p>
        <pre>
          <code dangerouslySetInnerHTML={{__html: JSON_FORMAT_STRING}} />
        </pre>

        <Fileload onChange={this.uploadJSON} />
      </div>
    )
  }
}

Upload.propTypes = {
  setUsers: PropTypes.func.isRequired,
};

export default withRouter(connect(
  null,
  dispatch => ({
    setUsers: bindActionCreators(setUsers, dispatch)
  })
)(Upload));