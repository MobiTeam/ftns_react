import React from 'react';
import DocumentTitle from 'react-document-title'
import Footer from './index/Footer'

class Registration extends React.Component {
	render () {
		return (
				<DocumentTitle title='Ugra-Fit: регистрация'>
					<div className="container">
						Страница регистрации
						<hr />
						<Footer />
					</div>
				</DocumentTitle>
		)		
	}
}

export default Registration;