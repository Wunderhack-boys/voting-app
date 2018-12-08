import React, { Component } from 'react';
import VoteInput from './VoteInput'


class GroupInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      groupName: '',
      groups: [],
    };
    
  }

  componentDidMount() {
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
    });
  }

  onChangeHandler = (e) => {
    this.setState({
      groupName: e.target.value
    });
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if(this.state.groupName !== ''){
      this.addGroupToFirebase(this.state.groupName);
    }
  }

  SetCurrentGroup = (e, id) => {
    this.props.firebase.currentGroup(this.state.currentGroupId).set(id);
  }

  addGroupToFirebase(groupName) {
    const groupItem = {
      name: groupName,
      score: 0
    }
    this.props.firebase.groups().push(groupItem);
  }

  renderList() {
    return this.state.groups.map((group) => 
    <tr key={group.id}>
     <td>{group.name} - {group.score}</td>
     <td><button className="btn btn-danger pl-3 ml-2" onClick={(e) => this.deleteGroupName(e, group.id)}>X</button></td>
     <td><button className="btn btn-primary pl-3 ml-2" onClick={(e) => this.SetCurrentGroup(e, group.id)}>Set to current</button></td>
    </tr>);
  }

  deleteGroupName(e, id) {
      let oldState = [...this.state.groups];
      let newState = oldState.filter( group =>  group.id !== id );
      this.props.firebase.groups().set(newState);
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmitHandler(e)}>
        <label>
          Groupname:
          <input type="text" name="name" onChange={e => this.onChangeHandler(e)}/>
        </label>
        <input type="submit" value="Submit" className="btn btn-primary ml-1" />
      </form>
      <VoteInput firebase={this.props.firebase} />
      <table>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
      </div>
    );
  }
}
  
export default GroupInput;
