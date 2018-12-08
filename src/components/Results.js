import React, { Component } from 'react';

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
    <li key={group.id} className="bar" style={{height: 30 * group.score + "px", backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)}}>
      <div className="chart-tag">{group.name}</div>
    </li>);
  }

  render() {
    return (
      <div>
        <div className="chart-wrapper">
          {this.renderChart()}
        </div>
      </div>
    );
  }
}

export default Results;