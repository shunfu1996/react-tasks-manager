
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
  const [filtingState, setFilingState] = useState("all")   //all filter done todo 
  const [isFilter, setIsFilter] = useState(false);
  const [status, setStatus] = useState("TODO");


  const [numberOfSchool, setNumberOfSchool] = useState((data.filter((task) => task.type === "School")).length)
  const [numberOfWork, setNumberOfWork] = useState((data.filter((task) => task.type === "Work")).length)
  const [numberOfHome, setNumberOfHome] = useState((data.filter((task) => task.type === "Home")).length)
  const [numberOfDone, setNumberOfDone] = useState((data.filter((task) => task.status === "DONE")).length)
  const [numberOfTodo, setNumberOfTodo] = useState((data.filter((task) => task.status === "TODO")).length)

  const submittingStatue = useRef(false);


  useEffect(() => {
    setNumberOfDone((data.filter((task) => task.status === "DONE")).length)
  },[data])
  useEffect(() => {
    setNumberOfTodo((data.filter((task) => task.status === "TODO")).length)
  },[data])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfSchool((data.filter((task) => task.type === "School")).length)
    } else if(filtingState === "done"){
      setNumberOfSchool(((data.filter((task) => task.status === "DONE")).filter((task) => task.type === "School")).length)
    } else if(filtingState === "todo"){
      setNumberOfSchool(((data.filter((task) => task.status === "TODO")).filter((task) => task.type === "School")).length)
    }
  },[filtingState, data])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfWork((data.filter((task) => task.type === "Work")).length)
    } else if(filtingState === "done"){
      setNumberOfWork(((data.filter((task) => task.status === "DONE")).filter((task) => task.type === "Work")).length)
    } else if(filtingState === "todo"){
      setNumberOfWork(((data.filter((task) => task.status === "TODO")).filter((task) => task.type === "Work")).length)
    }
  },[filtingState, data])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfHome((data.filter((task) => task.type === "Home")).length)
    } else if(filtingState === "done"){
      setNumberOfHome(((data.filter((task) => task.status === "DONE")).filter((task) => task.type === "Home")).length)
    } else if(filtingState === "todo"){
      setNumberOfHome(((data.filter((task) => task.status === "TODO")).filter((task) => task.type === "Home")).length)
    }
  },[filtingState, data])

  // card edit
  function test(){
    console.log(numberOfSchool)
  }

  return (
    <div className="App" > 
    <button onClick={test}>123</button>
      <Header CardData={data} filterTask={filterTask} setFilterTask={setFilterTask} setIsFilter={setIsFilter} numberOfSchool={numberOfSchool} numberOfWork={numberOfWork} numberOfHome={numberOfHome} numberOfDone={numberOfDone} numberOfTodo={numberOfTodo} setFilingState={setFilingState} filtingState={filtingState} /> 
      <Task isFilter={isFilter} CardData={data} filterTask={filterTask} deleteTask={setData} submittingStatue={submittingStatue} setFilterTask={setFilterTask} setStatus={setStatus} /> {/* passing the input value of the new task to the child */}
      <Card add={setData} submittingStatue={submittingStatue} status={status} />
      <Footer />
    </div>
  );
};

export default App;


