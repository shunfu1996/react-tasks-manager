
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
  // const [filterTaskStatus, setFilterTaskStatus] = useState(data);
  const [isFilter, setIsFilter] = useState(false);
  const [status, setStatus] = useState("TODO");

  const submittingStatue = useRef(false);

  // card edit


  return (
    <div className="App" > 
      <Header CardData={data} filterTask={filterTask} setFilterTask={setFilterTask} setIsFilter={setIsFilter} /> 
      <Task isFilter={isFilter} CardData={data} filterTask={filterTask} deleteTask={setData} submittingStatue={submittingStatue} setFilterTask={setFilterTask} setStatus={setStatus} /> {/* passing the input value of the new task to the child */}
      <Card add={setData} submittingStatue={submittingStatue} status={status} /* newTaskName={this.newTaskName} name={this.state.name} */ />
      <Footer />
    </div>
  );
};

export default App;


