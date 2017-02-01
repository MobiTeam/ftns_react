import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'

class Dashboard extends React.Component {
	render () {
		return (
				<DocumentTitle title='Ugra-Fit: личный кабинет'>
					<div>
						Личный кабинет
						<Link to='/dashboard/profile'>Профиль пользователя</Link>
						{this.props.children}
					</div>					
				</DocumentTitle>
			)		
	} 
}

export default Dashboard;