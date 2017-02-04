import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { logOut } from '../actions/userActions'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
	render () {
		return (
				<DocumentTitle title='Ugra-Fit: личный кабинет'>
					<div>
						Личный кабинет
						<button onClick={this.props.logOut}>Выход</button>
						<Link to='/dashboard/profile'>Профиль пользователя</Link>
						{this.props.children}
					</div>					
				</DocumentTitle>
			)		
	} 
}

const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => {
			dispatch(logOut());
		}
	}
} 


export default connect(null, mapDispatchToProps)(Dashboard);