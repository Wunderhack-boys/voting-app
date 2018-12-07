import React, { Component } from 'react';

class GroupInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      groupName: '',
      groups: [],
    };
    
  }

  onChangeHandler = (e) => {
    this.setState({
      groupName: e.target.value
    });
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      groups: [
        ...this.state.groups, 
        this.state.groupName]
    });
  }

  renderList() {
    console.log("rendering list");
    return this.state.groups.map((group,id) => <li key={id}>{group}<button onClick={id => this.deleteGroupName(id)}>X</button> </li>);
  }
  deleteGroupName(id) {
    console.log(' group name deleted');
    const array = [...this.state.groups];
    if (id > -1) {
      array.splice(id, 1);
      this.setState({groups: array});
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmitHandler(e)}>
        <label>
          Groupname:
          <input type="text" name="name" onChange={e => this.onChangeHandler(e)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {this.renderList()}
      </div>
    );
  }
}
  
export default GroupInput;
