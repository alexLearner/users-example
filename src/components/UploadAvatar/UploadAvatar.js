import React, { Component } from  'react';
import PropTypes from 'prop-types';
import Upload from 'antd/lib/upload';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';
import './UploadAvatar.css';

class UploadAvatar extends Component {
  state = {
    isLoading: false,
    imageURL: null,
  };

  action = null; // string or function for request url;

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  beforeUpload = file => {
    const isJPG = file.type === 'image/jpeg';
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }

    return isJPG && isLt2M;
  };

  customRequest = () => {
    // request for load file
  };

  handleChange = (info) => {
    const
      { onChange } = this.props,
      isUploading = info.file.status === 'uploading',
      file = info.file.originFileObj;

    if (isUploading) {
      this.getBase64(
        file,
        imageURL => {
          this.setState({
            imageURL,
            loading: false,
          });

          onChange(imageURL)
        }
      );
    }
  };

  render() {
    const
      { imageURL, isLoading } = this.state,
      { defaultImage } = this.props;

    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader uploader"
        showUploadList={false}
        action={this.action}
        customRequest={this.customRequest}
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {
          imageURL || defaultImage
            ? <img src={imageURL || defaultImage} alt="avatar" />
            : (
              <div>
                <Icon type={isLoading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
              </div>
            )
        }
      </Upload>
    );
  }
};

UploadAvatar.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultImage: PropTypes.string,
};

export default UploadAvatar;
