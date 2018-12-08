import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userId: '',
      name: '',
      email: '',
      picture: ''
    }
  }

  render() {
    return (
      <button onClick={() => this.props.firebase.connectToFacebook()}>
        Login with Facebook
      </button>
    )
  }
}  
export default Login;