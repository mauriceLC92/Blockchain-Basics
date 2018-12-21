import React, {Component} from 'react'
import { Form, Header } from 'semantic-ui-react'
import keccak from 'keccak';

class Sha256Hash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keccakInput: '',
		}

		this.handleChangeKeccak =  this.handleChangeKeccak.bind(this);
	}

	handleChangeKeccak(event) {
		var value = event.target.value;
		this.setState(function () {
			return {
				keccakInput: keccak('keccak256').update(`${value}`).digest('hex')
			}
		})
	}
	
	render() {
		return (
			<Form>
				<Header as='h2'>keccak256</Header>
				<Form.Field>
					<label>Data Input</label>
					<input
						type='text'
						onChange={this.handleChangeKeccak}
						autoComplete={false}
					/>
				</Form.Field>
				<Form>
					<Form.Field>
						<label>Data Output</label>
						<input
							value={this.state.keccakInput} />
					</Form.Field>
				</Form>
			</Form>
		)
	}
}

export default Sha256Hash;

