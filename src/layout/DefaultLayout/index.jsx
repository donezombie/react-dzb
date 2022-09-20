import React, { Fragment, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute';
import routes from 'routes/routes';
import { Route, Routes } from 'react-router-dom';
import LayoutWithDrawerAndAppbar from 'components/LayoutWithDrawerAndAppbar';
import CommonIcons from 'components/CommonIcons';
import { RouteBase } from 'constants/routeUrl';
import Header from 'components/Header';

const leftMenu = [
  {
    label: 'Home',
    icon: CommonIcons.Help,
    path: RouteBase.Home,
  },
  {
    label: 'Dashboard',
    icon: CommonIcons.Help,
    path: RouteBase.Dashboard,
  },
];

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <LayoutWithDrawerAndAppbar topDrawer={<div>This is TOP Drawer</div>} header={<Header />} leftMenu={leftMenu}>
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
      </LayoutWithDrawerAndAppbar>
    </Fragment>
  );
};

export default DefaultLayout;
