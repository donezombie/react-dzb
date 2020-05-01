import types from '../types';

const initialState = {
  listTodos: []
};

export default (state = initialState, actions) => {
	switch (actions.type) {
		case types.TEST_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case types.TEST_REQUEST_SUCCESS:
			return {
        ...state,
        listTodos: actions.data,
        isFetching: false,
        error: null,
			};

		case types.TEST_REQUEST_FAILED:
			return {
				...state,
				error: actions.error,
				isFetching: false
			};
		default:
			return state;
	}
};
