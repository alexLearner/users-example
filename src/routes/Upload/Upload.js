import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { setUsers } from "../../actions/users";
import Title from "../../components/Title";
import Fileload from "../../components/Fileload";
import { ROOT } from "../../config";
import "./Upload.css";

// build json mock example
let JSON_EXAMPLE = [];
for (let i = 1; i < 4; i++) {
  JSON_EXAMPLE.push({
    id: i,
    first_name: `first_name_${i}`,
    last_name: `last_name_${i}`,
    avatar: ``,
  })
}

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

    setTimeout(() => history.push(ROOT + "/"), UPLOAD_REDIRECT_DELAY);
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

        <br />
        <p>As an example, you can use:</p>
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(JSON_EXAMPLE, null, 2)
            }}
          />
        </pre>

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