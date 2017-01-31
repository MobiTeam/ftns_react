import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

class Home extends React.Component {
	render () {
		return (
				<DocumentTitle title='Главная страница'>
					<div>
						Главная страница
						<Link to="/dashboard">В личный кабинет</Link>
					</div>
				</DocumentTitle>
			)		
	} 
}

export default Home;