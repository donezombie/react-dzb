import axios from 'axios';

class Services {
  constructor() {
    this.axios = axios;
  }

  get(...arg) {
    return this.axios.get(...arg);
  }

  post(...arg) {
    return this.axios.post(...arg);
  }
}

export default new Services();