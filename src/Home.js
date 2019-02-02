import React, { Component } from 'react';
import App from './App';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import Example from './Example';
import Details from './Details';

class Home extends Component {
  render() {
    return (
      <div>
		<Router>
			<div>
				<Route exact path='/' component={App} />
				<Route path='/Example' component={Example} />
				<Route path='/Details' component={Details} />
			</div>
		</Router>
	</div>
    );
  }
}

export default Home;
