'use strict';

import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import about from './about';
import contact from './contact';

const routes = {
	childRoutes: [
		{
			path: '/',
			component: App,
			indexRoute: {component: Home},
			childRoutes: [
				about,
				contact
			]
		}
	]
};

export default routes;
