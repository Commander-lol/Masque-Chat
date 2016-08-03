import FacebookApi from '../utils/FacebookApi';
import { isArray } from 'lodash';

export const LOGGING_IN = 'LOGGING_IN';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';
export const LOG_IN_SUCCEED = 'LOG_IN_SUCCEED';
export const LOAD_USER = 'LOAD_USER';
export const LOAD_THREADS = 'LOADS_THREADS';

export function loggingIn() {
  return {
    type: LOGGING_IN,
  };
}

export function logInFail() {
  return {
    type: LOG_IN_FAIL,
  };
}
export function logInSucceed(api) {
  return {
    type: LOG_IN_SUCCEED,
    api,
  };
}

export function loadUsers(userData) {
  return {
    type: LOAD_USER,
    users: userData,
  };
}

export function loadThreads(threads) {
  return {
    type: LOAD_THREADS,
    threads,
  };
}

export const logIn = (email, password) =>
  async dispatch => {
    dispatch(loggingIn());
    const api = new FacebookApi(email, password);
    const succeed = await api.isLoggedIn();
    if (succeed) {
      dispatch(logInSucceed(api));
    } else {
      dispatch(logInFail());
    }
  };

export const loadUsersWith = (ids, api) =>
  async dispatch => {
    let idList = ids;
    if (!isArray(idList)) idList = [idList];
    const users = await Promise.all(idList.map(id => api.getUserData(id)));
    users.map(user => dispatch(loadUsers(user)));
  }

export const loadThreadsWith = (start, end, api) =>
  async dispatch => {
    const threads = await api.getThreadList(start, end);
    dispatch(loadThreads(threads));
  }
