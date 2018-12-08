import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  login = () => {
    this.props.firebase.connectToFacebook().then((user) => this.props.onLogin(user));
  }

  render() {
    return (
      <button onClick={() => this.login()}>
        Login with Facebook
      </button>
    )
  }
}  
export default Login;