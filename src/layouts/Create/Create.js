import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import 'antd/lib/form/style/index.css';
import 'antd/lib/input/style/index.css';
import { bindActionCreators } from "redux";
import UploadAvatar from "../../components/UploadAvatar";
import "./Create.css";
import Title from "../../components/Title";
import {pushUser} from "../../actions/users";

const FormItem = Form.Item;

const FIELDS = {
  firstName: {
    rules: [{ required: true, message: "Please input your first name!" }],
    prefix: <Icon type="user" />,
    placeholder: "First name",
  },

  lastName: {
    rules: [{ required: true, message: "Please input your second name!" }],
    prefix: <Icon type="user" />,
    placeholder: "Second name"
  }
};

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Create extends Component {
  state = {
    image: undefined,
  };

  uploadImage = image =>
    this.setState({ image });

  submit = e => {
    e.preventDefault();

    const
      { form, pushUser } = this.props,
      { image } = this.state;

    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        pushUser({
          first_name: values.firstName,
          last_name: values.lastName,
          avatar: image,
          id: (new Date()).getTime(),
        })
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const firstNameError = isFieldTouched('firstName') && getFieldError('firstName');
    const lastNameError = isFieldTouched('lastName') && getFieldError('lastName');

    return (
      <Form onSubmit={this.submit} className="create">
        <Title className="create_title">Create new user</Title>

        <FormItem
          validateStatus={firstNameError ? 'error' : ''}
          help={firstNameError || ''}
        >
          {
            getFieldDecorator(
              'firstName',
              {rules: FIELDS.rules}
            )(
              <Input
                prefix={FIELDS.firstName.prefix}
                placeholder={FIELDS.firstName.placeholder}
              />
            )
          }
        </FormItem>

        <FormItem
          validateStatus={lastNameError ? 'error' : ''}
          help={lastNameError || ''}
        >
          {
            getFieldDecorator(
              'lastName',
              {rules: FIELDS.rules}
            )(
              <Input
                prefix={FIELDS.lastName.prefix}
                placeholder={FIELDS.lastName.placeholder}
              />
            )
          }
        </FormItem>

        <FormItem>
          <UploadAvatar onChange={this.uploadImage} />
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="create_button"
            disabled={hasErrors(getFieldsError())}
          >
            Create
          </Button>
        </FormItem>

      </Form>
    )
  }
}

Create.propTypes = {
  fetched: PropTypes.bool,
  data: PropTypes.array,
};

const CreateWrapper = Form.create()(Create);

export default connect(
  null,
  dispatch => ({
    pushUser: bindActionCreators(pushUser, dispatch),
  }),
)(CreateWrapper);