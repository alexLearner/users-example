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

    case c.USERS_PUSH: {
      return {
        ...state,
        data:
          state.data
            ? [...state.data, action.payload]
            : [action.payload],
      }
    }

    case c.USERS_REMOVE: {
      return {
        ...state,
        data: state.data.filter(
          user => user.id !== action.payload
        )
      }
    }

    default:
      return state;
  }
}
