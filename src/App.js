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
          <Route exact path='/'>
            <Vote/>
          </Route>
          <Route exact path='/da-resultz' component={Results}/>
          <Route exact path='/secretadmin'>
            <FirebaseContext.Consumer>
              {firebase => <GroupInput firebase={firebase}/>}
            </FirebaseContext.Consumer>
          </Route>
      </div>
    );
  }
}
export default App;
