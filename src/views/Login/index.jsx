import React from 'react';
import { Formik, Form, Field } from 'formik';
import ErrorFocus from 'components/ErrorFocus';
import InputField from 'components/CustomField/InputField';
import { Navigate } from 'react-router-dom';
import { RouteBase } from 'constants/routeUrl';
import { useAuthentication } from 'providers/AuthenticationProvider';
import CommonStyles from 'components/CommonStyles';
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import LangServices from 'services/langServices';
import i18n from 'i18n';
import { REQUIRED_FIELD } from 'helpers/messages';

const useStyles = makeStyles((theme) => {
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
  //! State
  const classes = useStyles();
  const { isLogged, login } = useAuthentication();
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(REQUIRED_FIELD(i18n.t('common:username'))),
  });

  //! Render
  if (isLogged) {
    return <Navigate to={RouteBase.Home} replace />;
  }

  return (
    <Formik
      validationSchema={validationSchema}
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
            <Field component={InputField} name="username" label={t('common:username')} />
          </div>

          <div className={classes.eachRow}>
            <Field component={InputField} name="password" type="password" label={t('common:password')} />
          </div>

          <div>
            <CommonStyles.Button
              variant="outline"
              onClick={() => {
                LangServices.changeLanguage(LangServices.getCurrentLang() === 'vi' ? 'en' : 'vi');
              }}
            >
              Change lang
            </CommonStyles.Button>
          </div>

          <CommonStyles.Button type="submit">Submit</CommonStyles.Button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginPage;
