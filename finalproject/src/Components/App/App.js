
import { useState, useEffect, useRef } from 'react';
import { API_GET_DATA } from '../Server/API';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';
import './App.css';

async function fetchData(setData) {
  const result = await fetch(API_GET_DATA);
  const {data} = await result.json();
  setData(data);
}

async function fetchSetData(data) {
  console.log(data);
   await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  });
}

const App = () =>{
  const [data, setData] = useState([]);
  const [isDisplay, setIsDisplay] = useState("none");
  const submittingStatue = useRef(false);

  useEffect(()=>{
    if (!submittingStatue.current){
      return
    }
    fetchSetData(data)
    .then(data => submittingStatue.current = false)
  }, [data])

  useEffect(()=>{
    fetchData(setData);
  },[])

  return (
    <div className="App">
      <Header CardData={data} display={setIsDisplay} /> 
      <Task CardData={data} deleteTask={setData} submittingStatue={submittingStatue} /> {/* passing the input value of the new task to the child */}
      <Card add={setData} isDisplay={isDisplay} submittingStatue={submittingStatue}  /* newTaskName={this.newTaskName} name={this.state.name} */ />
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
