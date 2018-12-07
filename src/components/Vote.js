import React, { Component } from 'react';

class Vote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      voteValue: 5
    }
  }

  onChangeHandler = (e) => {
    this.setState({voteValue: e.target.value});
  }

  render() {
    return (
      <div>
        <div>{this.state.voteValue}</div>
        <input type="range" 
               min="1" 
               max="10" 
               defaultValue="5" 
               id="myRange" 
               onChange={e => this.onChangeHandler(e)}/>
      </div>
    );
  }
}
  
export default Vote;
