
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
  const [filtingState, setFilingState] = useState("all")   
  const [isFilter, setIsFilter] = useState(false);
  const [status, setStatus] = useState("TODO");
  const [backgroundImage, setBackgroundImage] = useState(null)


  const [numberOfSchool, setNumberOfSchool] = useState((data.filter((task) => task.type === "School")).length)
  const [numberOfWork, setNumberOfWork] = useState((data.filter((task) => task.type === "Work")).length)
  const [numberOfHome, setNumberOfHome] = useState((data.filter((task) => task.type === "Home")).length)
  const [numberOfDone, setNumberOfDone] = useState((data.filter((task) => task.status === "DONE")).length)
  const [numberOfTodo, setNumberOfTodo] = useState((data.filter((task) => task.status === "TODO")).length)
  const [numberOfPast, setNumberOfPast] = useState((data.filter((task) => nowDate > task.dueDate).length))
  const [numberOfToday, setNumberOfToday] = useState((data.filter((task) => nowDate === task.dueDate).length))
  const [numberOfFuture, setNumberOfFuture] = useState((data.filter((task) => nowDate < task.dueDate).length))

  const submittingStatue = useRef(false);

  var nowDate = new Date().toJSON().slice(0,10).replace(/-/g,'-')
 

  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfPast((data.filter((task) => nowDate > task.dueDate).length))
    } else if(filtingState === "done"){
      setNumberOfPast(((data.filter((task) => task.status === "DONE")).filter((task) => nowDate > task.dueDate).length))
    } else if(filtingState === "todo"){
      setNumberOfPast(((data.filter((task) => task.status === "TODO")).filter((task) => nowDate > task.dueDate).length))
    } 
  },[filtingState, data, nowDate])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfToday((data.filter((task) => nowDate === task.dueDate).length))
    } else if(filtingState === "done"){
      setNumberOfToday(((data.filter((task) => task.status === "DONE")).filter((task) => nowDate === task.dueDate).length))
    } else if(filtingState === "todo"){
      setNumberOfToday(((data.filter((task) => task.status === "TODO")).filter((task) => nowDate === task.dueDate).length))
    }
  },[filtingState, data, nowDate])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfFuture((data.filter((task) => nowDate < task.dueDate).length))
    } else if(filtingState === "done"){
      setNumberOfFuture(((data.filter((task) => task.status === "DONE")).filter((task) => nowDate < task.dueDate).length))
    } else if(filtingState === "todo"){
      setNumberOfFuture(((data.filter((task) => task.status === "TODO")).filter((task) => nowDate < task.dueDate).length))
    }
  },[filtingState, data, nowDate])
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



  return (
    <div className="App background-img" style={{backgroundImage: `url(${backgroundImage})`}}> 
      <Header
      CardData={data} filterTask={filterTask} setFilterTask={setFilterTask} setIsFilter={setIsFilter}
      numberOfSchool={numberOfSchool} numberOfWork={numberOfWork} numberOfHome={numberOfHome} numberOfDone={numberOfDone}
      numberOfTodo={numberOfTodo} setFilingState={setFilingState} filtingState={filtingState} 
      setBackgroundImage={setBackgroundImage} numberOfPast={numberOfPast} numberOfToday={numberOfToday} numberOfFuture={numberOfFuture}
      /> 
      <Task isFilter={isFilter} CardData={data} filterTask={filterTask} deleteTask={setData} submittingStatue={submittingStatue} setFilterTask={setFilterTask} setStatus={setStatus} /> {/* passing the input value of the new task to the child */}
      <Card add={setData} submittingStatue={submittingStatue} status={status} />

      <Footer />

    </div>
  );
};

export default App;


