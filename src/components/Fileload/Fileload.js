import React, { Component } from  "react";
import PropTypes from "prop-types";
import isArray from "lodash/isArray"
import isObject from "lodash/isObject"
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import message from "antd/lib/message";
import "./Fileload.css";

class Fileload extends Component {
  onChange = (event) => {
    const
      file = event.target.files[0],
      reader = new FileReader(),
      { onChange, errorMessage, successMessage } = this.props;

    reader.onload = event => {
      try {
        const
          result = event.target.result,
          json = result && JSON.parse(result),
          isValid = json && isArray(json) && isObject(json[0]);

        if (isValid) {
          message.success(successMessage);
          onChange(json);
        } else {
          message.error(errorMessage);
        }

      } catch (error) {
        console.error(error);
        message.error(errorMessage);
      }
    };

    reader.readAsText(file);
  };

  render() {
    const { text } = this.props;

    return (
      <div>
        <Button className="fileload">
          <input
            type="file"
            accept="application/json"
            onChange={this.onChange}
            className="fileload_input"
          />

          <Icon type="upload" />
          { text }
        </Button>
      </div>
    );
  }
}

Fileload.defaultProps = {
  text: "Upload JSON file",
  errorMessage: "JSON file is not valid",
  successMessage: "Successful upload. Wait for redirect",
};

Fileload.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Fileload;
