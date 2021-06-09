import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './scss/styles.scss';
import SecureRoute from 'routes/SecureRoute';
import PrivateRoute from 'components/PrivateRoute';
import { RouteBase } from 'constants/routeUrl';
import { checkAuth } from 'redux/modules/auth';
import LoginPage from 'views/Login';

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
        <PrivateRoute path={RouteBase.Home} component={SecureRoute} />
      </Switch>
    </Router>
  );
};

export default App;
