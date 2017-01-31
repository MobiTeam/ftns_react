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

import { all } from './constants/acl.js'

import configureStore from './store/store';

const store = configureStore(JSON.parse(localStorage['fit.root'] || '{}'));

render( 
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute authorize={all} component={Home} />
					<Route path='dashboard' authorize={all} component={Dashboard} />
				</Route>
				<Route path='*' component={NotFound} />
			</Router>
		</Provider>,
		document.getElementById('root')
	)



