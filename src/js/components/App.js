'use strict';

import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Nav from './Nav';

class App extends Component {
	constructor(props){
		super(props);

		this.navItems = ['about', 'contact'];
	}

	render(){
		return (
			<div>
				<h1>Multipage application</h1>

				{/* Main navigation */}
				<Nav data={this.navItems} />

				{/* Page container */}
				<div role="main">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
