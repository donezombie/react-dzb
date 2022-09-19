import React from 'react';
import { Formik, Form, FastField } from 'formik';
import ErrorFocus from 'components/ErrorFocus';
import InputField from 'components/CustomField/InputField';
import { Navigate } from 'react-router-dom';
import { RouteBase } from 'constants/routeUrl';
import { useAuthentication } from 'providers/AuthenticationProvider';

const LoginPage = (props) => {
  const { isLogged, login } = useAuthentication();

  if (isLogged) {
    return <Navigate to={RouteBase.Home} replace />;
  }

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values) => {
        const { username, password } = values;
        login({ username, password });
      }}
    >
      {(propsFormik) => (
        <Form>
          <ErrorFocus />
          <div>username: don & password: don</div>
          <div>
            <label htmlFor="username">UserName</label>
            <FastField component={InputField} name="username" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <FastField component={InputField} name="password" type="password" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginPage;
