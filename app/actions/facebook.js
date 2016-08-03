import FacebookApi from '../utils/FacebookApi';

export const LOGGING_IN = 'LOGGING_IN';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';
export const LOG_IN_SUCCEED = 'LOG_IN_SUCCEED';

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
