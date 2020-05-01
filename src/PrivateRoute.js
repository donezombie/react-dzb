import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
  const authReducer = useSelector(state => state.authReducer);
  const { isLogin } = authReducer;
  if (isLogin) {
    return <Route {...props} />
  }
  return <Redirect to='/login' />
}

export default PrivateRoute;