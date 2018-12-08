import React, { Component } from 'react';
import Vote from './components/Vote.js';
import Results from './components/Results.js';
import GroupInput from './components/GroupInput.js';
import { FirebaseContext } from './components/Firebase';
import Login from './components/Login.js';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FirebaseContext.Consumer>
          {firebase => <GroupInput firebase={firebase}/>}
        </FirebaseContext.Consumer>
        <Login/> */}
          <Route exact path='/' component={Vote}/>
          <Route exact path='/da-resultz' component={Results}/>
          {/* both /roster and /roster/:number begin with /roster */}
          {/* <Route path='/roster' component={Roster}/> */}
      </div>
    );
  }
}
export default App;
