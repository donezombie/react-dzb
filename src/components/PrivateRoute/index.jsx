import { RouteBase } from 'constants/routeUrl';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GetAuthSelector } from 'redux/selectors/auth';
import authServices from 'services/authServices';

const PrivateRoute = (props) => {
  const auth = GetAuthSelector();
  const dataUserStorage = authServices.getUserLocalStorage();
  const { isLogin } = auth;

  // Render
  if (dataUserStorage.isLogged || isLogin) {
    return <Route {...props} />;
  }

  return <Redirect to={RouteBase.Login} />;
};

export default PrivateRoute;
