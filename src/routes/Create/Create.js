import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import { bindActionCreators } from "redux";
import UploadAvatar from "../../components/UploadAvatar";
import { pushUser, editUser } from "../../actions/users";
import Title from "../../components/Title";
import "./Create.css";
import { ROOT } from "../../config";

const FormItem = Form.Item;

const FIELDS = {
  firstName: {
    rules: [{ required: true, message: "Please input your first name!" }],
    prefix: <Icon type="smile-o" />,
    placeholder: "First name",
  },

  lastName: {
    rules: [{ required: true, message: "Please input your second name!" }],
    prefix: <Icon type="frown-o" />,
    placeholder: "Second name"
  }
};

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Create extends Component {
  state = {};

  uploadImage = image =>
    this.setState({ image });

  submit = e => {
    e.preventDefault();

    const
      {
        form,
        pushUser,
        editUser,
        history,
        isEdit,
        match: { params: { id } },
      } = this.props,
      { image } = this.state;

    form.validateFields((err, values) => {
      if (!err) {
        const object = {
          first_name: values.firstName,
          last_name: values.lastName,
          id: (new Date()).getTime(),
        };

        if (image) {
          object.avatar = image;
        }

        if (isEdit) {
          editUser(id, object)
        } else {
          pushUser(object);
        }

        history.push(ROOT + '/')
      }
    });
  };

  render() {
    const
      {
        form,
        isEdit,
        data,
        match: { params: { id } }
      } = this.props,
      {
        getFieldDecorator,
        getFieldsError,
        getFieldError,
        isFieldTouched,
      } = form,

      firstNameError = isFieldTouched('firstName') && getFieldError('firstName'),
      lastNameError = isFieldTouched('lastName') && getFieldError('lastName');

    let defaultValues = {};

    if (isEdit && data) {
      defaultValues = data.find(user => user.id === +id);
    }

    return (
      <div className="create">
        <Title className="create_title">
          {
            !isEdit
              ? "Create new user"
              : `Edit ${defaultValues.first_name}'s profile`
          }
        </Title>

        <Form onSubmit={this.submit} >
          <FormItem
            className="create_field"
            validateStatus={firstNameError ? 'error' : ''}
            help={firstNameError || ''}
          >
            {
              getFieldDecorator(
                'firstName',
                {
                  rules: FIELDS.rules,
                  initialValue: defaultValues.first_name
                }
              )(
                <Input
                  prefix={FIELDS.firstName.prefix}
                  placeholder={FIELDS.firstName.placeholder}
                />
              )
            }
          </FormItem>

          <FormItem
            className="create_field"
            validateStatus={lastNameError ? 'error' : ''}
            help={lastNameError || ''}
          >
            {
              getFieldDecorator(
                'lastName',
                {
                  rules: FIELDS.rules,
                  initialValue: defaultValues.last_name
                }
              )(
                <Input
                  prefix={FIELDS.lastName.prefix}
                  placeholder={FIELDS.lastName.placeholder}
                />
              )
            }
          </FormItem>

          <FormItem className="create_field">
            <UploadAvatar
              onChange={this.uploadImage}
              defaultImage={defaultValues.avatar}
            />
          </FormItem>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="create_button"
              size="large"
              disabled={hasErrors(getFieldsError())}
            >
              {
                isEdit ? "Edit" : "Create new user"
              }
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

Create.propTypes = {
  fetched: PropTypes.bool,
  data: PropTypes.array,
  editUser: PropTypes.func.isRequired,
  pushUser: PropTypes.func.isRequired,
};

const CreateWrapper = Form.create()(Create);
const CreateWrapperRouter = withRouter(CreateWrapper);

export default connect(
  state => ({
    data: state.users.data,
  }),
  dispatch => ({
    pushUser: bindActionCreators(pushUser, dispatch),
    editUser: bindActionCreators(editUser, dispatch),
  }),
)(CreateWrapperRouter);