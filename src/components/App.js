import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Hashing from './Hashing';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
		<Router>
		<div className='container'>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/hashing' component={Hashing} />
				{/* <Route exact path='/blocks' component={LiveFeedContainer} />
				<Route path='/blockchain' component={BoardContainer} /> */}
				<Route render={function () {
					return <p>Not Found :/</p>
				}} />
			</Switch>
		</div>
	</Router>
    );
  }
}

export default App;
