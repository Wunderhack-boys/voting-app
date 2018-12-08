import React, { Component } from 'react';
import facebookbtn from '../images/facebookbtn.png';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  login = () => {
    this.props.firebase.connectToFacebook().then((user) => this.props.onLogin(user));
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="welcome">Welcome to Wunderhack</div>
        {/* <button className="facebook-btn" onClick={() => this.login()}>
          Continue with Facebook
        </button> */}
        <img src={facebookbtn} alt="fb-login" className="facebook-btn" onClick={() => this.login()}/>
      </div>
    )
  }
}  
export default Login;