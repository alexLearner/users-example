import * as c from "../constants";

const initialState = {
  fetched: false,
  data: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case c.USERS_GET_DATA: {
      return {
        ...state,
        fetched: true,
        data: action.payload,
      }
    }

    default:
      return state;
  }
}
