import React, { Component } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

import ethereum from '../assets/ethereum.svg';
import bitcoin from '../assets/bitcoin.svg';
class Home extends Component {
	render() {
		return (
			<Grid container={true}>
			<Grid.Row>
			</Grid.Row>
				<Grid.Row columns={1} centered={true}>
					<Header className='header-huge' as='h1'>Blockchain Basics</Header>
				</Grid.Row>
				<Grid.Row columns={1} centered={true}>
					<Header className='header-huge' as='h2'>Introduction to this website...Place holder</Header>
				</Grid.Row>
				<Grid.Row columns={1} centered={true}>
					<Header className='header-huge' as='h2'>Introduction to this website...Place holder</Header>
				</Grid.Row>
				<Grid.Row columns={2}>
					<Grid.Column>
						<Image src={ethereum} alt="ethereum" size='small'/>
					</Grid.Column>
					<Grid.Column>
						<Image src={bitcoin} alt="bitcoin" size='small'/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	};
}

export default Home;