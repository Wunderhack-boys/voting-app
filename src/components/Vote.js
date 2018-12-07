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
    this.benImage.current.style.transform = 'translateX(-50%) translateY(' + (170 + e.target.value * -11) + 'px)';
  }

  render() {
    return (
      <div>
        <h2 ref={this.groupName}>Voting App</h2>
        <div>{this.state.voteValue}</div>
        <input type="range" 
               id="myRange" 
               min={this.voteMin}
               max={this.voteMax} 
               defaultValue={this.state.voteValue} 
               onChange={e => this.onChangeHandler(e)}/>
        <img src={ben} alt="ben" ref={this.benImage} className="ben-image" />
      </div>
    );
  }
}
  
export default Vote;
