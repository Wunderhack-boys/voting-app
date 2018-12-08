import React, { Component } from 'react';
import Vote from './components/Vote.js';
import Results from './components/Results.js';
import GroupInput from './components/GroupInput.js';
import { FirebaseContext } from './components/Firebase';
import Login from './components/Login.js';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  loginHandler = (loginData) => {
    if (loginData) {
      this.setState({
        loggedIn: true
      })
    }
  }
  render() {
    return (
      <div className="App">
          <Route exact path='/' render={() => (
            <FirebaseContext.Consumer>
              {firebase => {
                  if (this.state.loggedIn) {
                    return (<Vote firebase={firebase}/>)
                  } else {
                    return (<Login firebase={firebase} onLogin={this.loginHandler}/>)
                  }
                }
              }
            </FirebaseContext.Consumer>
          )}/>
          <Route exact path='/da-resultz' render={() => (
            <FirebaseContext.Consumer>
              {firebase => <Results firebase={firebase}/>}
            </FirebaseContext.Consumer>
          )}/>
          <Route exact path='/secretadmin' render={() => (
            <FirebaseContext.Consumer>
              {firebase => <GroupInput firebase={firebase}/>}
            </FirebaseContext.Consumer>
          )}/>
      </div>
    );
  }
}
export default App;
