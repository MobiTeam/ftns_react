import React, { PropTypes } from 'react';

class AuthorizedComponent extends React.Component {
	static propTypes = {
    	routes: PropTypes.array.isRequired
    }
    static contextTypes = {
    	router: PropTypes.object.isRequired
  	}
  	componentWillMount() {
  		const { routes } = this.props;
  		const { router } = this.context;
  		console.log(routes, router);
  	}
}

export default AuthorizedComponent;