'use strict';

import { Link } from 'react-router';
import React from 'react';

const Nav = ({data}) => {
	return (
		<nav>
			<ul role="menu">
				{data.map(item => {
					return (
						<li key={item}>
							<Link to={`/${item}`} activeClassName="active">{item} page</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	);
};

export default Nav;
