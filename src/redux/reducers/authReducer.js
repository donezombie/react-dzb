import types from '../types';

const initialState = {
  isLogin: false,
  error: null,
};

export default (state = initialState, actions) => {
	switch (actions.type) {
		case types.REQUEST_LOGIN:
			return {
				...state,
				isLogin: false
			};
		case types.REQUEST_LOGIN_SUCCESS:
			return {
				...state,
        isLogin: true,
        error: null,
			};

		case types.REQUEST_LOGIN_FAILED:
			return {
				...state,
				error: actions.error,
				isLogin: false
			};

		default:
			return state;
	}
};
