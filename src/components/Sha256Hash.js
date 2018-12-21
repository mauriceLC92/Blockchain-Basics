import React, {Component} from 'react'
import { Form, Header } from 'semantic-ui-react'
import CryptoJS from 'crypto-js';

class Sha256Hash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			SHA256Input: '',
		}

		this.handleChange =  this.handleChange.bind(this);
	}
	handleChange(event) {
		var value = event.target.value;
		this.setState(function () {
			return {
				SHA256Input: CryptoJS.SHA256(value).toString(),
			}
		})
	}
	
	render() {
		return (
			<Form className='form'>
				<Header as='h2'>SHA256</Header>
				<Form.Field>
					<label>Data Input</label>
					<input
						type='text'
						onChange={this.handleChange}
						autoComplete={false}
					/>
				</Form.Field>
				<Form>
					<Form.Field>
						<label>Data Output</label>
						<input
							value={this.state.SHA256Input} />
					</Form.Field>
				</Form>
			</Form>
		)
	}
}

export default Sha256Hash;

