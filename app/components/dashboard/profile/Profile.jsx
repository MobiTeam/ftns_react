import React from 'react';
import DocumentTitle from 'react-document-title'

class Profile extends React.Component {
	render () {
		return (
				<DocumentTitle title='Ugra-Fit: профиль пользователя'>
					<div className="container">
						Страница профиля пользователя
					</div>
				</DocumentTitle>
		)		
	}
}

export default Profile;