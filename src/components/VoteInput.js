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
      currentGroupId: 1,            
    }

    this.benImage = React.createRef();
  }

  componentDidMount() {
    // Updates the current group ID when the current group changes
    this.props.firebase.currentGroup().on('value', (snapshot) => {
      const id = snapshot.val();
      this.setState({currentGroupId: id});

    // Updates the Group when CurrentGroup changes
      this.updateCurrentGroup(snapshot, id);
    });
    // This updates the Group when the data of the currentGroup changes
    this.props.firebase.groups().on('value', (snapshot) => {
      this.updateCurrentGroup(snapshot, this.state.currentGroupId);
    });
  }

  updateCurrentGroup(snapshot, id) {
    this.props.firebase.group(id).once('value').then((snapshot) => {
      const newCurrentGroup = {
        ...snapshot.val(),
        id: snapshot.key
      }
      this.setState({currentGroup: newCurrentGroup})
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

      this.props.firebase.group(this.state.currentGroup.id).update({score: newScore});       
    }
    
  }

  render() {
    return (
      <div>
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
                <div className="vote-button-wrapper">
                  <button id="vote-button" onClick={() => this.submitVote()}>
                    <p id="vote-button-text">Vote</p>
                  </button>
                </div>
          <img src={ben} alt="ben" ref={this.benImage} className="ben-image" />
        </div>
      </div>
    );
  }
}
  
export default Vote;
