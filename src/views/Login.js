import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Redirect } from 'react-router-dom';
import actions from '../redux/actions';
import TransitionComponent from '../components/TransitionComponent/TransitionComponent';

const { login } = actions;

const LoginPage = () => {
	const dispatch = useDispatch();
	const authReducer = useSelector((state) => state.authReducer);
	const { isLogin, error } = authReducer;

	if (isLogin) {
		return <Redirect to="/" />;
	}

	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			onSubmit={(values, propsFormik) => {
				const { username, password } = values;
				dispatch(login({ username, password }));
			}}
		>
			{({ errors, values, handleChange }) => (
				<TransitionComponent>
					<Form>
						<div>Input username: test / password: 1234 to login</div>
						<div>
							<Field type="text" name="username" placeholder="Username" />
						</div>
						<div>
							<Field type="password" name="password" placeholder="Password" />
						</div>
						{error && <p>{error}</p>}
						<button type="submit">Submit</button>
					</Form>
				</TransitionComponent>
			)}
		</Formik>
	);
};
export default LoginPage;
