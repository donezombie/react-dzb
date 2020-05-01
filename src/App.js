import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import PrivateRoute from './PrivateRoute';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				{routes.map(
					(route) =>
						route.isPrivate ? (
							<PrivateRoute key={route.path} {...route} />
						) : (
							<Route key={route.path} {...route} />
						)
				)}
			</Switch>
		</Router>
	);
};

export default App;
