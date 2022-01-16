import './App.css';
import React from 'react';
import { Froms } from '../Froms/Froms';
import { TaskBlock } from '../TaskBlock/TaskBlock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : null,
      description : null,
      assignedTo : null,
      dueDate : null
    };
    this.addName = this.addName.bind(this);
    this.addDescription = this.addDescription.bind(this);
    this.addAssignedTo = this.addAssignedTo.bind(this);
    this.addDueDate = this.addDueDate.bind(this);
  }
  
  addName(name) {
    this.setState({
      name : name
    })
  }

  addDescription(description) {
    this.setState({
      description : description
    })
  }

  addAssignedTo(assignedTo) {
    this.setState({
      assignedTo : assignedTo
    })
  }

  addDueDate(dueDate) {
    this.setState({
      dueDate : dueDate
    })
  }
  

  render() {
    return (
          <div className="container">
              <h1 className='my-5'>Tack Lisk</h1>
              <h3>New Task</h3>
              <Froms addName={this.addName} addDescription={this.addDescription} addAssignedTo={this.addAssignedTo} addDueDate={this.addDueDate}/>
              <TaskBlock name={this.state.name} description={this.state.description} assignedTo={this.state.assignedTo} dueDate={this.state.dueDate}/>
          </div>

    )
  }
}


export default App;
