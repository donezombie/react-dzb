import axios from 'axios';

const KEY_USER = 'user';

class Services {
  constructor() {
    this.axios = axios;
    this.interceptors = null;
    this.axios.defaults.withCredentials = true;

    this.get = this.axios.get;
    this.post = this.axios.post;
    this.put = this.axios.put;
    this.delete = this.axios.delete;
    this.patch = this.axios.patch;
  }

  attachTokenToHeader(token) {
    this.interceptors = this.axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
  }

  saveTokenStorage(token) {
    window.localStorage.setItem(KEY_USER, token);
  }

  getTokenStorage() {
    const userStorage = window.localStorage.getItem(KEY_USER);

    if (userStorage === 'null') {
      return null;
    }

    return userStorage;
  }

  removeInterceptors() {
    this.axios.interceptors.request.eject(this.interceptors);
  }

  source() {
    return this.axios.CancelToken.source();
  }

  isCancel(error) {
    return this.axios.isCancel(error);
  }
}

export default new Services();
