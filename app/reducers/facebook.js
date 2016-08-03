import { LOGGING_IN, LOG_IN_SUCCEED, LOG_IN_FAIL, LOAD_USER, LOAD_THREADS} from '../actions/facebook';
import { uniqBy, sortBy } from 'lodash';

const initial = {
  api: null,
  users: {},
  threads: [],
  loggedIn: false,
  loggingIn: false,
};

export default function menu(state = initial, action) {
  switch (action.type) {
    case LOGGING_IN:
      return { ...state, loggingIn: true };
    case LOG_IN_SUCCEED:
      return {
        ...state,
        api: action.api,
        loggedIn: true,
        loggingIn: false,
      };
    case LOG_IN_FAIL:
      return {
        ...state,
        api: null,
        loggedIn: false,
        loggingIn: false,
      };
    case LOAD_USER:
      return {
        ...state,
        users: {
          ...state.users,
          ...action.users,
        },
      }
    case LOAD_THREADS:
      return {
        ...state,
        threads: sortBy(uniqBy(state.threads.concat(action.threads), 'threadID'), 'timestamp'),
      }
    default:
      return state;
  }
}
