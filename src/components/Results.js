import React, { Component } from 'react';
import superSam from '../images/supersam.png';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupName: '',
      groups: [],
    };
  }

  componentDidMount() {
    // document.getElementsByTagName('body')[0].style.backgroundColor = '#fff';
    this.props.firebase.groups().on('value', (snapshot) => {
      let items = snapshot.val();
      
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
          score: items[item].score,
        });
      }
      this.setState({
        groups: newState
      });

      console.log(this.state.groups);
    });
  }

  countVotes() {
    this.props.firebase.currentGroup().on('value', (snapshot) => {
      const id = snapshot.val();
      this.setState({currentGroupId: id})
    });
  }
  
  renderChart() {

    console.log("rendering list");
    
    return this.state.groups.map((group) =>
    (<div key={group.id} className="bar-wrapper">
      <div className="chart-tag">{group.name}</div>
      <div className="bar" style={{width: 4 * group.score + "px", backgroundColor: '#ff69a9'}}>
      </div>
      <div className="chart-score" style={{marginLeft: '10px'}}>{group.score}</div>
    </div>));
  }

  render() {
    return (
      <div>
        <img src={superSam} alt="supersam" className="super-sam"></img>
        <div className="chart-wrapper">
          {this.renderChart()}  
        </div>
      </div>
    );
  }
}

export default Results;