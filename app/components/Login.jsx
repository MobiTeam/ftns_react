import React from 'react'
import DocumentTitle from 'react-document-title'
import Footer from './index/Footer'
import { connect } from 'react-redux'
import { logIn } from '../actions/userActions'

class Login extends React.Component {
	state = {
		login : ''
	}
	onLoginInput (e) {
		this.setState({
			login : e.target.value
		})
	}
	onLoginFormSubmit (e) {
		e.preventDefault();
		this.props.logIn({
			'role' : 'admin'
		});
		this.redirectTo('/dashboard');
	}
	redirectTo (link) {
      const { router } = this.props;
      router.push(link);
    }
	render () {
		return (
				<DocumentTitle title='Ugra-Fit: авторизация'>
					<div className="container">
						Страница авторизации
						<form method="POST">
							<input type="text" placeholder="email" onChange={this.onLoginInput.bind(this)}/>
							<button onClick={this.onLoginFormSubmit.bind(this)}>Войти</button>
						</form>
						<hr />
						<Footer />
					</div>
				</DocumentTitle>
		)		
	}
}

function mapDispatchToProps (dispatch) {
	return {
		logIn: (payload) => {
			dispatch(logIn(payload));
		}
	}
}

export default connect(null, mapDispatchToProps)(Login);