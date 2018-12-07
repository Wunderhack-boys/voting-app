import React, { Component } from 'react';
import Vote from './components/Vote.js';
import GroupInput from './components/GroupInput.js';
import { FirebaseContext } from './components/Firebase';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Vote/>
        <FirebaseContext.Consumer>
          {firebase => <GroupInput firebase={firebase}/>}
        </FirebaseContext.Consumer>

      </div>
    );
  }
}
export default App;
