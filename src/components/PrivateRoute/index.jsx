import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteBase } from 'constants/routeUrl';
import { useAuthentication } from 'providers/AuthenticationProvider';

const PrivateRoute = (props) => {
  const { isLogged } = useAuthentication();

  //! Render
  if (isLogged) {
    return props.children;
  }

  return <Navigate to={RouteBase.Login} replace />;
};

export default PrivateRoute;
