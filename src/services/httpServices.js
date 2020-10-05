import axios from 'axios';

class Services {

	constructor() {
		this.axios = axios;
		this.interceptors = null;
		this.axios.defaults.withCredentials = true;
	}
	
	attachTokenToHeader(token) {
		this.interceptors = this.axios.interceptors.request.use(
			function(config) {
				// Do something before request is sent
				config.headers.sessionId = token;
				return config;
			},
			function(error) {
				return Promise.reject(error);
			}
		);
	}

	removeInterceptors() {
		this.axios.interceptors.request.eject(this.interceptors);
	}

  get(...arg) {
		return this.axios.get(...arg);
	}

	post(...arg) {
		return this.axios.post(...arg);
	}

	delete(...arg) {
		return this.axios.delete(...arg);
	}

	put(...arg) {
		return this.axios.put(...arg);
	}
}

export default new Services();
