'use strict';

import { Route } from 'react-router';
import App from '../components/app';

const appRoutes = {
	childRoutes: [
		{
			path: '/',
			component: App,
			childRoutes: [
				{
					path: '/about',
					getComponent(loc, cb){
						require.ensure([], (require) => {
							cb(null, require('../pages/about').default);
						});
					}
				},
				{
					path: '/contact',
					getComponent(loc, cb){
						require.ensure([], (require) => {
							cb(null, require('../pages/contact').default);
						});
					}
				}
			]
		}
	]
};

export default appRoutes;
