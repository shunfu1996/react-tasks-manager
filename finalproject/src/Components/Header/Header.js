/* import { useEffect } from 'react';
import { API_GET_DATA } from '../Server/API'; */
// import { useState } from 'react';
import './Header.css';
import Calendar from  '../Calendar/Calendar'
import React, {useState} from 'react'
//const || var || let  isScheduler = false <<js  hook>> const [isScheduler, setIsScheduler] = useState(false)
//                     isScheduler = 12eqw <<js  hook>> setIsScheduler(12eqw)

const Header = ({ CardData, setFilterTask, filterTask}) => {
    const [dateState, setDateState] = useState(new Date());
    const [isScheduler, setIsScheduler] = useState(false)
    var today = new Date();

    var nowDate = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+today.getDate();
 
    const handleIsScheduler = () =>{
        setIsScheduler(!isScheduler)
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
                {/* <i class="bi bi-calendar-check"></i> */}
                    {/* <button className="button1 btn list bi bi-calendar3" onClick={handleIsScheduler}>{isScheduler?(<button class="bi bi-card-checklist"></button>):(<button className="bi bi-calendar3"></button>)}</button> */}
                    {isScheduler?(<button  onClick={handleIsScheduler} class="bi bi-list-check button1 btn list fa-customize"></button>):(<button  onClick={handleIsScheduler} className="bi bi-calendar3 button1 btn list fa-customize"></button>)}
                </div>
                    <div className="text-center">
                        <img src="https://img.icons8.com/clouds/100/000000/todo-list.png" id="Check" alt="Check" width="120"/>
                    </div>
                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="Check" width="60" /> */}
                    <div>
                    <p className="title text-center text-uppercase fw-bold topic">To Do List</p>
                    </div>
                    {/* <div className="text-center col-3 pt-5">
                    <button  type="button" className="btn btn-primary buttonShape">ALL</button>
                </div> */}
            </div>
            <div style={isScheduler?{display: "none"}:{display: "block"}}>
                <div className="row m-3" >
                    <div className="col-3 d-grid gap-2; ">
                        <button type="button" className="button1 btn" onClick={handleYesterday}>Past</button>
                    </div>
                    <div className="col-3 d-grid gap-2">
                        <button type="button" className="button1 btn" onClick={handleToday}>Today</button>
                    </div>
                    <div className="col-3 d-grid gap-2">
                        <button type="button" className="button2 btn" onClick={handleTomorrow}>Future</button>
                    </div>
                    <div className="col-3 d-grid gap-2">
                        <button type="button" className="button2 btn" onClick={handleAll}>All</button>
                    </div>
                </div>
            </div>  
                <div className="calendar"> 
                    <Calendar isScheduler={isScheduler} dateState={dateState} setDateState={setDateState} CardData={CardData} filterTask={filterTask} setFilterTask={setFilterTask}/>
                </div> 
        </div>
    )
}
export default Header;

