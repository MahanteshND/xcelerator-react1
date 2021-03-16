import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { doLogin } from '../redux/actions/LoginAction';
import './Style.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false,
			errorMsg: '',
		};
	}

	login(role) {
		const data={
			loginType:'Sucess',
			roleType:role
		}
		this.props.doLogin(data);
		this.props.history.push('./DashBoard');
	}

	onClickLogIn = (e) => {
		e.preventDefault();
		const data = new FormData(document.getElementById('Login'));
		const username = data.get('username');
		const password = data.get('password');
		if(username === 'admin@gmail.com' && password === 'admin123'){
			this.login('Admin');
		}else if(username === 'operation@gmail.com' && password === 'operation123'){
			this.login('Operation');
		}else if(username === 'consumer@gmail.com' && password === 'consumer123'){
			this.login('Consumer');
		}else{
			this.setState({ error: true, errorMsg: 'Invalid Username and Password' })
		}
	};

	render() {
		return (
			<div className='wrapper'>
                <div className='form-wrapper'>
				<h2>Login Form</h2>
					<Form id="Login" onSubmit={this.onClickLogIn}>
					<FormGroup>
					<Label>User Name</Label>
						<Input name="username" required />
					</FormGroup>
					<FormGroup>
					    <Label>Password</Label>
						<Input name="password" type="Password" required />	
					</FormGroup>	
					{this.state.error && <div style={{ color: 'red', margin: 5 }}>{this.state.errorMsg}</div>}
					<div className='submit'>
					   <Button>Submit</Button>
           			</div>	
					</Form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (reduxState) => {
	console.log('state', reduxState);
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		doLogin: (data) => dispatch(doLogin(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
