import React, { Component } from 'react';
import Vote from './components/Vote.js';
import GroupInput from './components/GroupInput.js';
import { FirebaseContext } from './components/Firebase';
import Login from './components/Login.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Vote/>
        <FirebaseContext.Consumer>
          {firebase => <GroupInput firebase={firebase}/>}
        </FirebaseContext.Consumer>
        <Login/>
      </div>
    );
  }
}
export default App;
