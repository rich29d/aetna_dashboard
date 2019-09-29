import { combineReducers } from "redux";

const initialState = {
  loading: false,
  notification: {
    show: false,
    icon: "",
    text: [],
    type: ""
  },
  period: 'ano',
};

const tokens = {
  CHANGE_LOADING: "loading",
  TOGGLE_NOTIFICATION: "notification",
  PERIOD_GRAPHIC: "period",
};

const rootReducer = (state = initialState, action) => {
  const { type } = action;

  if (!tokens[type]) {
    return state;
  }

  const token = tokens[type];

  return {
    ...state,
    [token]: action[token]
  };
};

export default combineReducers({ rootReducer });
