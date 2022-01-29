
import { useState, useEffect, useRef } from 'react';
import { API_GET_DATA } from '../Server/API';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';
import './App.css';


const App = () =>{

  async function fetchData(setData) {/// get data from the db server
    const result = await fetch(API_GET_DATA); 
    const {data} = await result.json();
    setData(data);
  }
  
  async function fetchSetData(data) {//// save data to the db server
    console.log(data);
     await fetch(API_GET_DATA, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ data })
    });
  }

  ///

  const [data, setData] = useState([]);
  const [filterTask, setFilterTask] = useState(data);

  /* const [isDisplay, setIsDisplay] = useState("block"); */
  const submittingStatue = useRef(false);

  useEffect(()=>{
    if (!submittingStatue.current){
      return
    }
    fetchSetData(data)
    .then(data => submittingStatue.current = false)
  }, [data])

  useEffect(()=>{
    fetchData(setData); /// using data of the db server--(fetchData) set to the data--(setData)
  },[])

  return (
    <div className="App">
      <Header CardData={data} filterTask={filterTask} setFilterTask={setFilterTask} /> 
      <Task CardData={filterTask} deleteTask={setData} submittingStatue={submittingStatue} /> {/* passing the input value of the new task to the child */}
      <Card add={setData} submittingStatue={submittingStatue}  /* newTaskName={this.newTaskName} name={this.state.name} */ />
      <Footer />
    </div>
  );
};

export default App;


/* "data": [{
          "id": "01",
          "name": "a",
          "description": "",
            "assignedTo": "",
            "dueDate": ""
      }], */
