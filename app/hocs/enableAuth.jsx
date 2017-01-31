import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const enableAuth = (Component, roles) => class extends React.Component {
  constructor () {
      function mapStateToProps (state) {
        console.log(state);
        return {
          "user" : state.user
        }
      }
      Component = connect(mapStateToProps)(Component);
      super();   
  }
  componentWillMount () {
    console.log();
    const { router } = this.context;
  }
  render () {
    return <Component {...this.props} />
  }
}


// function enableAuth (Component, roles) {
//   function mapStateToProps (state) {
//     return {
//       "user" : state.user
//     }
//   }
  
//   console.log(Component.componentWillMount, roles);
//   Component = connect(mapStateToProps)(Component);   
  
//   return function (props) {
//     return <Component {...props} />;
//   }
// }

// class AuthorizedComponent extends React.Component {
// 	static propTypes = {
//     	routes: PropTypes.array.isRequired
//     }
//   static contextTypes = {
//   	router: PropTypes.object.isRequired
// 	}
// 	componentWillMount () {
// 		const { routes } = this.props;
// 		const { router } = this.context;
// 	}
// }


export default enableAuth;
