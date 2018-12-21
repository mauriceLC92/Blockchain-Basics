import React, { Component } from 'react';
import { Grid, Header, Message } from 'semantic-ui-react';
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
				<Grid.Row columns={1} centered={true}>
					<Message>
						<Message.Header>What is Hashing?</Message.Header>
						<p>
							In simple terms, hashing means taking an input string of any length and giving out an output of a fixed length.
							In the context of cryptocurrencies like Bitcoin, the transactions are taken as an input and run through a hashing algorithm.
    					</p>
					</Message>
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