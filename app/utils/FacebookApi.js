import fapi from 'facebook-chat-api';

export default class FacebookApi {
  constructor(email, password) {
    this.api = new Promise((res, rej) => {
      fapi({ email, password }, (err, api) => {
        if (err) rej(err);
        else res(api);
      });
    });
  }

  getThreadList = async (start, end) => {
    const api = await this.api;
    return new Promise((res, rej) => {
      api.getThreadList(start, end, (err, threadlist) => {
        if (err) rej(err);
        else res(threadlist);
      });
    });
  }

  isLoggedIn = async () => {
    try {
      await this.api;
    } catch (e) {
      return false;
    }
    return true;
  }
}
