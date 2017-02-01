import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const enableAuth = (Component, roles) => {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      user: PropTypes.object.isRequired
    }

    componentWillMount () {
      this._checkAndRedirect();
    }

    componentWillUpdate () {
      this._checkAndRedirect();
    }

    _checkAndRedirect () {
      const { role } = this.props.user;
      const availRoles = typeof roles === "string" ? [roles] : roles;
      if (!availRoles.includes(role)) this._redirectTo('/login');
    }

    _redirectTo (link) {
      const { router } = this.props;
      router.push(link);
    }

    render () {
      return (
          <div className="authenticated">
            <Component {...this.props} />
          </div>
        )
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  };

  return connect(mapStateToProps)(AuthenticatedComponent);
}

export default enableAuth;
