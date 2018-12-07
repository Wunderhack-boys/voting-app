import React, { Component } from 'react';
import Vote from './components/Vote.js';
import GroupInput from './components/GroupInput.js';
import Login from './components/Login.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Vote/>
        <GroupInput/>
        <Login/>
      </div>
    );
  }
}
export default App;
