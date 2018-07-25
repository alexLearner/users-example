import React, { Component } from  "react";
import PropTypes from "prop-types";
import isArray from "lodash/isArray"
import isObject from "lodash/isObject"
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import "./Fileload.css";

const
  STATUS_ERROR = 1,
  STATUS_SUCCESS = 2;

class Fileload extends Component {
  state = { status: 0 };

  onChange = (event) => {
    const
      file = event.target.files[0],
      reader = new FileReader(),
      { onChange } = this.props;

    reader.onload = event => {
      try {
        const
          result = event.target.result,
          json = result && JSON.parse(result),
          isValid = json && isArray(json) && isObject(json[0]);

        this.setState({
          status: isValid ? STATUS_SUCCESS : STATUS_ERROR
        });

        if (isValid) {
          onChange(json);
        }
      } catch (error) {
        console.error(error);
        this.setState({ status: STATUS_ERROR });
      }
    };

    reader.readAsText(file);
  };

  render() {
    const
      { status } = this.state,
      { text, errorMessage, successMessage } = this.props;

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

        {
          status === STATUS_ERROR && (
            <div className="fileload_error">{ errorMessage }</div>
          )
        }

        {
          status === STATUS_SUCCESS && (
            <div className="fileload_success">{ successMessage }</div>
          )
        }

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
