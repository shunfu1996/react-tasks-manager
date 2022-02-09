
import { useState, /* useEffect, */ useRef } from 'react';
import useLocalStorage from "use-local-storage";
import Header from '../Header/Header';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';
import './App.css';


const App = () =>{

  const [data, setData] = useLocalStorage("data", []);
  const [filterTask, setFilterTask] = useState(data);
  const [isFilter, setIsFilter] = useState(false);

  const submittingStatue = useRef(false);

  // card edit
  const submitEdit = (id, name, dueDate, type, description) => {
    // const taskToEdit = filterTask.findIndex(task => task.id === id);

    // let editedTask = filterTask[taskToEdit];

    /* editedTask = {
      ...editedTask, 
      name: name,
      dueDate: dueDate,
      type: type,
      description: description,

    }; */

    /* let newTaskArray = filterTask.filter(task => task.id !== id)
    
    newTaskArray = [editedTask, ...newTaskArray]

    setFilterTask(newTaskArray) */

  }

  return (
    <div className="App" > 
      <Header CardData={data} filterTask={filterTask} setFilterTask={setFilterTask} setIsFilter={setIsFilter} /> 
      <Task isFilter={isFilter} CardData={data} submitEdit={submitEdit} filterTask={filterTask} deleteTask={setData} submittingStatue={submittingStatue} setFilterTask={setFilterTask} /> {/* passing the input value of the new task to the child */}
      <Card add={setData} submittingStatue={submittingStatue}  /* newTaskName={this.newTaskName} name={this.state.name} */ />
      <Footer />
    </div>
  );
};

export default App;


