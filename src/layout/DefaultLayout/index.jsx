import React, { Fragment, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute';
import Footer from 'components/Footer';
import Header from 'components/Header';
import routes from 'routes/routes';
import { Route, Routes } from 'react-router-dom';

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="main-container">
        <Suspense fallback="Loading...">
          <Routes>
            {routes.map((route, idx) => {
              return (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  element={
                    route.isPrivateRoute ? (
                      <PrivateRoute>
                        <route.component />
                      </PrivateRoute>
                    ) : (
                      <route.component />
                    )
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
