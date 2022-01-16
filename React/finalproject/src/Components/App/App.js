import React from 'react';
import { useState } from 'react';

import Header from '../Header/Header';
// import Date from '../Date/Date';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';
/* export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: 0,
        name: '',
        description: 'wewe',
        assignedTo: 'wewe',
        dueDate: 'w',
        status: 'TODO'
    };
    this.newTaskName = this.newTaskName.bind(this);
    
  }
  newTaskName(newName) {
    this.setState({
      name: newName
    })
    console.log(`hi ${this.state.name}`)
  }
  
  

  render(){ */
  const App = () =>{
    const [date, setDate] = useState([])

    return (
      <div className="App">
        <Header /> 
        <Task taskDate={date} deleteTask={setDate}/>
        <Card add={setDate} /* newTaskName={this.newTaskName} name={this.state.name} */ />
        <Footer />
      </div>
    );
  };

  export default App;