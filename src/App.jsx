import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import { RouteBase } from 'constants/routeUrl';
import LoginPage from 'views/Login';
import DefaultLayout from 'layout/DefaultLayout';
import './scss/styles.scss';

const App = () => {
  //! Render
  return (
    <Router>
      <Routes>
        <Route path={RouteBase.Login} exact element={<LoginPage />} />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <DefaultLayout />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
