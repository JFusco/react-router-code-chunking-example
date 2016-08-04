'use strict';

export default {
	path: '/about',
	getComponent(loc, cb){
		require.ensure([], (require) => {
			cb(null, require('../components/About').default);
		});
	}
}
