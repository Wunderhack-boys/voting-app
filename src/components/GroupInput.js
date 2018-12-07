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
    // if input is not empty then..
      if(this.state.groupName !== ''){
        this.setState({
          groups: [
            ...this.state.groups, 
            this.state.groupName]
        });
    }
  }

  renderList() {

    console.log("rendering list");
    
    return this.state.groups.map((groupName,id) => 
    <li key={id}>
      {groupName}
      <button class="btn btn-danger pl-3" onClick={(e) => this.deleteGroupName(e, id)}>X</button> 
    </li>);
    
   
  }

  deleteGroupName(e, id) {
    this.setState({groups: this.state.groups.filter(
      (groupName, i) => 
        i !== id
        )
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmitHandler(e)}>
        <label>
          Groupname:
          <input type="text" name="name" onChange={e => this.onChangeHandler(e)}/>
        </label>
        <input type="submit" value="Submit" class="btn btn-primary ml-1" />
      </form>
      {this.renderList()}
      </div>
    );
  }
}
  
export default GroupInput;
