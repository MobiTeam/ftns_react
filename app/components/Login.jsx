import React from 'react'
import DocumentTitle from 'react-document-title'
import Footer from './index/Footer'

class Login extends React.Component {
	render () {
		return (
				<DocumentTitle title='Ugra-Fit: авторизация'>
					<div className="container">
						Страница авторизации
						<hr />
						<Footer />
					</div>
				</DocumentTitle>
		)		
	}
}

export default Login;