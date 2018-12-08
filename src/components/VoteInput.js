import React, { Component } from 'react';
import ben from '../images/ben.png';

class Vote extends Component {

  constructor(props) {
    super(props);

    this.voteMin = 1;
    this.voteMax = 10;

    this.state = {
      voteValue: 1,
      currentGroup: '',
    }

    this.benImage = React.createRef();
  }

  componentDidMount() {
    this.props.firebase.currentGroup().on('value', (snapshot) => {
      this.props.firebase.group(snapshot.val()).once('value').then((snapshot) => {
        this.setState({currentGroup: snapshot.val()})
      });
    });
  }

  onChangeHandler = (e) => {
    this.setState({voteValue: e.target.value});
    this.benImage.current.style.transform = 'translateX(-50%) translateY(' + (218 + e.target.value * -18) + 'px)';
  }

  submitVote() {
    if(this.state.currentGroup) {
      const submittedScore = parseInt(this.state.voteValue);
      const oldScore = this.state.currentGroup.score;
      
      const newScore = oldScore + submittedScore;
      console.log(newScore);
    }
    
  }

  render() {
    return (
      <div className="vote-wrapper">
        <h2 className="vote-header">{ this.state.currentGroup ? this.state.currentGroup.name : 'Voting App' }</h2>
        <div className="vote-score">{this.state.voteValue}</div>
        <input type="range" 
               id="myRange"
               min={this.voteMin}
               max={this.voteMax} 
               defaultValue={this.state.voteValue} 
               onChange={e => this.onChangeHandler(e)}
               className="vote-slider"/>   
        <div id="floating-button" onClick={() => this.submitVote()}>
          <p className="plus">+</p>
        </div>
        <img src={ben} alt="ben" ref={this.benImage} className="ben-image" />
      </div>
    );
  }
}
  
export default Vote;
