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
    document.getElementsByTagName('body')[0].style.backgroundColor = '#fff';
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

  renderChart() {

    console.log("rendering list");
    
    return this.state.groups.map((group) =>
    (<div key={group.id}>
      <div className="bar" style={{height: 30 * group.score + "px", backgroundColor: '#444444'}}></div>
      <div className="chart-tag">{group.name}</div>
    </div>));
  }

  render() {
    return (
      <div>
        <img src={superSam} alt="supersam"></img>
        <div className="chart-wrapper">
          {this.renderChart()}  
        </div>
      </div>
    );
  }
}

export default Results;