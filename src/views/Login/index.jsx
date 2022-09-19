import React from 'react';
import { Formik, Form, FastField } from 'formik';
import ErrorFocus from 'components/ErrorFocus';
import InputField from 'components/CustomField/InputField';
import { Navigate } from 'react-router-dom';
import { RouteBase } from 'constants/routeUrl';
import { useAuthentication } from 'providers/AuthenticationProvider';
import CommonStyles from 'components/CommonStyles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  console.log(theme);

  return {
    form: {
      padding: 12,
    },
    eachRow: {
      marginBottom: theme.spacing(),
    },
  };
});

const LoginPage = (props) => {
  const classes = useStyles();
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
        <Form className={classes.form}>
          <ErrorFocus />
          <div className={classes.eachRow}>
            <i>Input username: don & password: don</i>
          </div>

          <div className={classes.eachRow}>
            <FastField component={InputField} name="username" label="Username" />
          </div>

          <div className={classes.eachRow}>
            <FastField component={InputField} name="password" type="password" label="Password" />
          </div>

          <CommonStyles.Button type="submit">Submit</CommonStyles.Button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginPage;
