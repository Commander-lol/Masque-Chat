import { LOGGING_IN, LOG_IN_SUCCEED, LOG_IN_FAIL } from '../actions/facebook';

const defaultState = { api: null, loggedIn: false, loggingIn: false };

export default function menu(state = defaultState, action) {
  switch (action.type) {
    case LOGGING_IN:
      return { ...state, loggingIn: true };
    case LOG_IN_SUCCEED:
      return {
        api: action.api,
        loggedIn: true,
        loggingIn: false,
      };
    case LOG_IN_FAIL:
      return defaultState;
    default:
      return state;
  }
}
