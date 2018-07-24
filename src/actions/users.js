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