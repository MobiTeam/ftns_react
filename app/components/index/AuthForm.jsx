import React from 'react';

class AuthForm extends React.Component {
	render () {
		return (
				<form method="POST" action="" className="authForm">
					<button type="button" className="btn btn-labeled btn-success register-btn">
                		<span className="btn-label">
                			<i className="fa fa-user-plus" aria-hidden="true"></i>
                		</span>
                		Зарегистрироваться
                	</button>
					<button type="button" className="btn btn-labeled btn-primary login-btn">
                		<span className="btn-label">
                			<i className="fa fa-sign-in" aria-hidden="true"></i>
                		</span>
                		У меня уже есть логин
                	</button>
				</form>
			)
	}
}

export default AuthForm;