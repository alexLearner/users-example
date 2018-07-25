import * as c from "../constants";
import UserClass from "../modules/api/Users";

const UsersAPI = new UserClass();

export const setUsers = payload => ({
  type: c.USERS_SET_DATA,
  payload
});

export const getUsers = () => dispatch => {
  UsersAPI
    .getUsers()
    .then(res => dispatch(setUsers(res)))
};

export const pushUser = payload => ({
  type: c.USERS_PUSH,
  payload
});

export const removeUser = payload => ({
  type: c.USERS_REMOVE,
  payload
});

export const editUser = (id, data) => ({
  type: c.USERS_EDIT,
  payload: { id, data }
});
