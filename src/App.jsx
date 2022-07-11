import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './scss/styles.scss';
import PrivateRoute from 'components/PrivateRoute';
import { RouteBase } from 'constants/routeUrl';
import { checkAuth } from 'redux/modules/auth';
import LoginPage from 'views/Login';
import DefaultLayout from 'layout/DefaultLayout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  //! Render
  return (
    <Router>
      <Switch>
        <Route path={RouteBase.Login} exact component={LoginPage} />
        <PrivateRoute path={RouteBase.Home} component={DefaultLayout} />
      </Switch>
    </Router>
  );
};

export default App;
