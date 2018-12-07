import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

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

  componentClicked = () => console.log('clicked');
  responseFacebook = response => {
    console.log(response);
  }

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (<FacebookLogin
        appId='2737594593133391'
        autoLoad={true}
        fields='name,email,picture'
        onClick={this.componentClicked}
        callback={this.responseFacebook} />);
    }

    return (
      <div>
        {fbContent}
      </div>
    )
  }
}  
export default Login;