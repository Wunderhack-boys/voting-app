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
      // this.setState({
      //   groups: [
      //     ...this.state.groups, 
      //     this.state.groupName]
      // });
      this.addGroupToFirebase(this.state.groupName);
    }
  }

  addGroupToFirebase(groupName) {
    const groupItem = {
      name: groupName,
      score: 0
    }
    this.props.firebase.groups().push(groupItem);
  }

  renderList() {

    console.log("rendering list");
    
    return this.state.groups.map((group) => 
    <li key={group.id}>
      {group.name}
      <button className="btn btn-danger pl-3 ml-2" onClick={(e) => this.deleteGroupName(e, group.id)}>X</button> 
    </li>);
    
   
  }

  deleteGroupName(e, id) {
    // this.setState({groups: this.state.groups.filter(
    //   (groupName, i) => 
    //     i !== id
    //     )
    // });
    
      
      let oldState = [...this.state.groups];
      let newState = oldState.filter( group =>  group.id !== id );
      this.props.firebase.groups().set(newState);
     
      
   
  }

  componentDidMount() {
    const itemsRef = this.props.firebase.groups();
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      console.log(items);
      
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
        });
      }
      this.setState({
        groups: newState
      });
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
        <input type="submit" value="Submit" className="btn btn-primary ml-1" />
      </form>
      {this.renderList()}
      </div>
    );
  }
}
  
export default GroupInput;
