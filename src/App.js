import React, { Component } from 'react';
import Vote from './components/Vote.js';
import GroupInput from './components/GroupInput.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Vote/>
        {/* <GroupInput/> */}
      </div>
    );
  }
}
export default App;
