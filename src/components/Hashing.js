import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import CryptoJS from 'crypto-js';

class Hashing extends Component {
	render() {
		console.log(JSON.stringify(CryptoJS.SHA256('Blockchain Rock!')));
		return (
			<Grid container={true}>
			<Grid.Row>
			</Grid.Row>
				<Grid.Row columns={1} centered={true}>
					<Header className='header-huge' as='h1'>Hashing Algorithms</Header>
				</Grid.Row>
				<p>{CryptoJS.SHA256('Blockchain Rock!').toString()}</p>
			</Grid>
		)
	};
}

export default Hashing;