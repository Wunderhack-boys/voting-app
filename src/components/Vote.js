import React, { Component } from 'react';
import ben from '../images/ben.png';

class Vote extends Component {

  constructor(props) {
    super(props);

    this.voteMin = 1;
    this.voteMax = 10;

    this.state = {
      voteValue: 1,
    }

    this.groupName = React.createRef();
    this.benImage = React.createRef();
  }

  onChangeHandler = (e) => {
    this.setState({voteValue: e.target.value});
    this.groupName.current.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.benImage.current.style.transform = 'translateX(-50%) translateY(' + (170 + e.target.value * -14) + 'px)';
  }

  render() {
    return (
      <div className="vote-wrapper">
        <h2 className="vote-header" ref={this.groupName}>Voting App</h2>
        <div className="vote-score">{this.state.voteValue}</div>
        <input type="range" 
               id="myRange"
               min={this.voteMin}
               max={this.voteMax} 
               defaultValue={this.state.voteValue} 
               onChange={e => this.onChangeHandler(e)}
               className="vote-slider"/>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div id="floating-button">
          <p className="plus">+</p>
        </div>
        <img src={ben} alt="ben" ref={this.benImage} className="ben-image" />
      </div>
    );
  }
}
  
export default Vote;
