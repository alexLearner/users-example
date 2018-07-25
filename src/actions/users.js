import * as c from "../constants";
import UserClass from "../modules/api/Users";

const UsersAPI = new UserClass();

export const getUsers = () => dispatch => {
  UsersAPI
    .getUsers()
    .then(payload => {
      dispatch({
        type: c.USERS_GET_DATA,
        payload
      })
    })
};

export const pushUser = payload => ({
  type: c.USERS_PUSH,
  payload
});

export const removeUser = payload => ({
  type: c.USERS_REMOVE,
  payload
});
