
import { useState, useEffect, useRef } from 'react';
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
  const [numberOfSchool, setNumberOfSchool] = useState((data.filter((task) => task.type === "School")).length)
  const [numberOfWork, setNumberOfWork] = useState((data.filter((task) => task.type === "Work")).length)
  const [numberOfHome, setNumberOfHome] = useState((data.filter((task) => task.type === "Home")).length)

  const submittingStatue = useRef(false);


  useEffect(() => {
    setNumberOfSchool((data.filter((task) => task.type === "School")).length)
  })
  useEffect(() => {
    setNumberOfWork((data.filter((task) => task.type === "Work")).length)
  })
  useEffect(() => {
    setNumberOfHome((data.filter((task) => task.type === "Home")).length)
  })

  // card edit
  function test(){
    console.log(numberOfSchool)
  }

  return (
    <div className="App" > 
    <button onClick={test}>123</button>
      <Header CardData={data} filterTask={filterTask} setFilterTask={setFilterTask} setIsFilter={setIsFilter} numberOfSchool={numberOfSchool} numberOfWork={numberOfWork} numberOfHome={numberOfHome} /> 
      <Task isFilter={isFilter} CardData={data} filterTask={filterTask} deleteTask={setData} submittingStatue={submittingStatue} setFilterTask={setFilterTask} setStatus={setStatus} /> {/* passing the input value of the new task to the child */}
      <Card add={setData} submittingStatue={submittingStatue} status={status} />
      <Footer />
    </div>
  );
};

export default App;


