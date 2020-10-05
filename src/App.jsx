import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/styles.scss';
import SecureRoute from 'routes/SecureRoute';
import PrivateRoute from 'components/PrivateRoute';
import { RouteBase } from 'constants/routeUrl';
import LoginPage from 'views/Login';

const App = () => {

  // RENDER
  return (
    <Router>
      <Switch>
        <Route path={RouteBase.Login} exact component={LoginPage} />
        <PrivateRoute path="/" component={SecureRoute} />
      </Switch>
    </Router>
  )
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './scss/styles.scss';
// import SecureRoute from 'routes/SecureRoute';
// import PrivateRoute from 'components/PrivateRoute';
// import { RouteBase } from 'constants/routeUrl';
// import LoginPage from 'views/Login';

// import * as Ons from 'react-onsenui';
// import ons from 'onsenui';
// import 'onsenui/css/onsenui.css';
// import 'onsenui/css/onsen-css-components.css';

// const App = () => {

//   const handleClick = () => {
//     ons.notification.alert('Hello world!');
//   };

//   // RENDER
//   return (
//     <Ons.Page>
//       <Ons.Button onClick={handleClick}>Tap me!</Ons.Button>
//       <Ons.BottomToolbar modifier="material"> Content </Ons.BottomToolbar>
//     </Ons.Page>
//   )
  
// }

// export default App;
