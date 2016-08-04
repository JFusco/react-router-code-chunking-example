'use strict';

export default {
	path: '/contact',
	getComponent(loc, cb){
		require.ensure([], (require) => {
			cb(null, require('../components/Contact').default);
		});
	}
}
