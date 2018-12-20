import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

class Home extends Component {
	render() {
		return (
			<Grid container={true}>
			<Grid.Row>
			</Grid.Row>
				<Grid.Row columns={1} centered={true}>
					<Header className='header-huge' as='h1'>Home Landing Page</Header>
				</Grid.Row>
			</Grid>
		)
	};
}

export default Home;