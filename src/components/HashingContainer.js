import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Sha256Hash from './Sha256Hash';
import Keccak256Hash from './Keccak256Hash';

class HashingContainer extends Component {
	render() {
		return (
			<Grid container={true}>
				<Grid.Row>
				</Grid.Row>
				<Grid.Row columns={1} centered={true}>
					<Header className='header-huge' as='h1'>Hashing Algorithms</Header>
				</Grid.Row>
				<Grid.Row columns={2} centered={true}>
					<Grid.Column>
						<Sha256Hash />
					</Grid.Column>
					<Grid.Column>
						<Keccak256Hash />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	};
}

export default HashingContainer;