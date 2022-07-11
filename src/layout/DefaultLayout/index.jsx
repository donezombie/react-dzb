import React, { Fragment, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute';
import Footer from 'components/Footer';
import Header from 'components/Header';
import routes from 'routes/routes';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="main-container">
        <Suspense fallback="Loading...">
          <Switch>
            {routes.map((route, idx) => {
              if (route.isPrivate) {
                return <PrivateRoute key={idx} path={route.path} exact={route.exact} component={route.component} />;
              }

              return <Route key={idx} path={route.path} exact={route.exact} component={route.component} />;
            })}
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
