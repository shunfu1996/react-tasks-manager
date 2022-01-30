/* import { useEffect } from 'react';
import { API_GET_DATA } from '../Server/API'; */
// import { useState } from 'react';
import './Header.css';
import Calendar from  '../Calendar/Calendar'
import React, {useState} from 'react'


const Header = ({ CardData, setFilterTask, filterTask}) => {
    const [dateState, setDateState] = useState(new Date());
    const [isScheduler, setTest] = useState(false)
    var today = new Date();

    var nowDate = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+today.getDate();
 
    const handleIsScheduler = () =>{
        setTest(!isScheduler)
        setFilterTask([])
    }

    function filterYesterday(task){
        if(nowDate > task.dueDate){
          return true
        }
    }
    function filterToday(task){
        if(nowDate === task.dueDate){
          return true
        }
    }
    function filterTomorrow(task){
        if(nowDate < task.dueDate){
          return true
        }
    }

    const handleYesterday = () =>{
        console.log(CardData)
        console.log(test)
        setFilterTask(CardData.filter(filterYesterday))
    }
    const handleToday = () =>{
        console.log(CardData)
        setFilterTask(CardData.filter(filterToday))
    }
    const handleTomorrow = () =>{
        console.log(CardData)
        setFilterTask(CardData.filter(filterTomorrow))
    }
    const handleAll = () =>{
        setFilterTask(CardData)
        console.log(CardData)
    }

    return (
        <div className="placeTop card mask-custom outerShape" id='header'>
            <div className="card-body p-3 text-black row">
                {/* <div className="text-center col-3 pt-5">
                    <button type="button" className="btn btn-primary buttonShape">SORT</button>
                </div> */}
                <div className="text-center">
                    <button onClick={handleIsScheduler}>{isScheduler?"list":"Scheduler"}</button>
                    <img src="https://img.icons8.com/clouds/100/000000/todo-list.png" id="Check" alt="Check" width="120"/>
                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="Check" width="60" /> */}
                    <p className="title text-center text-uppercase fw-bold topic">To Do List</p>
                    </div>
                    {/* <div className="text-center col-3 pt-5">
                    <button  type="button" className="btn btn-primary buttonShape">ALL</button>
                </div> */}
            </div>
            <div style={isScheduler?{display: "none"}:{display: "block"}}>
                <div className="row m-3" >
                    <div className="col-3 d-grid gap-2; ">
                        <button type="button" className="button1 btn" onClick={handleYesterday}>Yesterday</button>
                    </div>
                    <div className="col-3 d-grid gap-2">
                        <button type="button" className="button2 btn"  onClick={handleToday} >Today</button>
                    </div>
                    <div className="col-3 d-grid gap-2">
                        <button type="button" className="button3 btn" onClick={handleTomorrow}>Tomorrow</button>
                    </div>
                    <div className="col-3 d-grid gap-2">
                        <button type="button" className="button3 btn" onClick={handleAll}>ALL</button>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="col-3 d-grid gap-2">
                    <button type="button" className="button2 btn"  onClick={handleToday}>Today</button>
                </div>
                <div className="col-3 d-grid gap-2">
                    <button type="button" className="button3 btn" onClick={handleTomorrow}>Tomorrow</button>
                </div>
                <div className="col-3 d-grid gap-2">
                    <button type="button" className="button3 btn" onClick={handleAll}>ALL</button>
                </div>
            </div>
=======
            </div>    
            <Calendar isScheduler={isScheduler} dateState={dateState} setDateState={setDateState} CardData={CardData} filterTask={filterTask} setFilterTask={setFilterTask}/>
>>>>>>> 4a318d9b02cd01c82657b8ba35e84b38260ce528
        </div>
    )
}
export default Header;

