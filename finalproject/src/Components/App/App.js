import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';
import './App.css';

  const App = () =>{
    const [date, setDate] = useState([])

    return (
      <div className="App">
        <Header /> 
        <Task taskDate={date} deleteTask={setDate}/> {/* passing the input value of the new task to the child */}
        <Card add={setDate} /* newTaskName={this.newTaskName} name={this.state.name} */ />
        <Footer />
      </div>
    );
  };

  export default App;