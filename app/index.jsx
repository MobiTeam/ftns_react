// basic libs
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// components
import App from './containers/App'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Registration from './components/Registration'

// acl
import { all, admin, user, guest } from './constants/acl.js'
import canSee from './hocs/enableAuth'

// store
import configureStore from './store/store'
import defaultState from './store/defaultState'

const store = configureStore(JSON.parse(localStorage['fit.root'] || JSON.stringify(defaultState)));

render( 
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={canSee(Home, all)} />
					<Route path='dashboard' component={canSee(Dashboard, [admin, user])} />
					<Route path='registration' component={canSee(Registration, all)} />
					<Route path='login' component={canSee(Login, all)} />
				</Route>
				<Route path='*' component={NotFound} />
			</Router>
		</Provider>,
		document.getElementById('root')
	)



