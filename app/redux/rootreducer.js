import { combineReducers } from "redux";

// Example reducer
const userReducer = (state = { name: "", loggedIn: false }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, name: action.payload, loggedIn: true };

    case "LOGOUT":
      return { ...state, name: "", loggedIn: false };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
