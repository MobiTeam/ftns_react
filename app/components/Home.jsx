import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'

import Footer from './index/Footer.jsx'
import Header from './index/Header.jsx'
import Motivator from './index/Motivator.jsx'
import AuthForm from './index/AuthForm.jsx'

class Home extends React.Component {
	render () {
		return (
				<DocumentTitle title='Ugra-Fit: главная страница'>
					<div className='container home-wrapper'>
						<div className="row">
							<Header />
						</div>
						<div className="row">
							<div className="col col-xs-12">
								<Motivator />
							</div>
							<div className="col col-xs-12">
								<AuthForm />
							</div>
						</div>
						<hr />
						<Footer />
					</div>
				</DocumentTitle>
			)
	}
}

// function mapStateToProps (state) {
// 	return {
// 		user : state.user
// 	}
// }

// export default connect(mapStateToProps)(Home);
export default Home;