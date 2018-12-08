import React, { Component } from 'react';
import VoteInput from './VoteInput';

class Vote extends Component {

  render() {
    return (
      <div>
        <VoteInput firebase={this.props.firebase} />
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    );
  }
}
  
export default Vote;
