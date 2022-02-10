import './Header.css';
import Calendar from  '../Calendar/Calendar'
import React, {useState} from 'react'

const Header = ({ CardData, setFilterTask, filterTask, setIsFilter}) => {
    const [dateState, setDateState] = useState(new Date());
    const [isScheduler, setIsScheduler] = useState(false)
    const [taskStatus, setTaskStatus] = useState(true)

    var nowDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');
 
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
    function filterFuture(task){
        if(nowDate < task.dueDate){
          return true
        }
    }

    const handleTypeFuture = (type) =>{
        if(type === "School"){
            setFilterTask((CardData.filter(filterFuture)).filter(task => task.type === "School"))
            setIsFilter(true)
        } else if(type === "Work"){
            setFilterTask((CardData.filter(filterFuture)).filter(task => task.type === "Work"))
            setIsFilter(true)
        } else if(type === "Home"){
            setFilterTask((CardData.filter(filterFuture)).filter(task => task.type === "Home"))
            setIsFilter(true)
        } 
    }

    const handleTypeToday = (type) =>{
        if(type === "School"){
            setFilterTask((CardData.filter(filterToday)).filter(task => task.type === "School"))
            setIsFilter(true)
        } else if(type === "Work"){
            setFilterTask((CardData.filter(filterToday)).filter(task => task.type === "Work"))
            setIsFilter(true)
        } else if(type === "Home"){
            setFilterTask((CardData.filter(filterToday)).filter(task => task.type === "Home"))
            setIsFilter(true)
        } 
    }
 
    const handleTypePast = (type) =>{
        if(type === "School"){
            setFilterTask((CardData.filter(filterYesterday)).filter(task => task.type === "School"))
            setIsFilter(true)
        } else if(type === "Work"){
            setFilterTask((CardData.filter(filterYesterday)).filter(task => task.type === "Work"))
            setIsFilter(true)
        } else if(type === "Home"){
            setFilterTask((CardData.filter(filterYesterday)).filter(task => task.type === "Home"))
            setIsFilter(true)
        } 
    }
    const handleTime = (time) =>{
        if(time === "past"){
            setFilterTask(CardData.filter(filterYesterday))
            setIsFilter(true)
        } else if(time === "today"){
            setFilterTask(CardData.filter(filterToday))
            setIsFilter(true)
        } else if(time === "future"){
            setFilterTask(CardData.filter(filterFuture))
            setIsFilter(true)
        } else if(time === "all"){
            setFilterTask(CardData.filter(filterYesterday))
            setIsFilter(false)
        }
    }
    const handleTaskstatus = () => {
        setTaskStatus(!taskStatus)
        if(taskStatus){
        setFilterTask(CardData.filter((task) => task.status === "DONE"))
        setIsFilter(true)
        }else {
        setFilterTask(CardData.filter((task) => task.status === "TODO"))
        setIsFilter(true)
        }
    }
    const handleType = (type) =>{
        if(type === "School"){
        setFilterTask(CardData.filter((task) => task.type === "School"))
        setIsFilter(true)
        } else if(type === "Work"){
        setFilterTask(CardData.filter((task) => task.type === "Work"))
        setIsFilter(true)
        } else if(type === "Home"){
        setFilterTask(CardData.filter((task) => task.type === "Home"))
        setIsFilter(true)
        }
    }

    return (
        <div className="placeTop card mask-custom outerShape" id='header'>
            <div className="card-body p-3 text-black row">
                <div className="text-center">
                {/* <i class="bi bi-calendar-check"></i> */}
                    {/* <button className="button1 btn list bi bi-calendar3" onClick={handleIsScheduler}>{isScheduler?(<button class="bi bi-card-checklist"></button>):(<button className="bi bi-calendar3"></button>)}</button> */}
                    <div>
                    {isScheduler?(<button  onClick={handleIsScheduler} className="bi bi-list-check button1 btn list fa-customize "></button>):(<button  onClick={handleIsScheduler} className="bi bi-calendar3 button1 btn list fa-customize"></button>)}
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={() => handleTaskstatus()} >{taskStatus?"DONE":"TODO"}</button>
                        {/* <button type="button" className="btn btn-primary buttonShape sort" onClick={() => handleTaskstatus("TODO")} >TODO</button> */}
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={() => handleTime("all")} >All</button>
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={() => handleType("School")} >School</button>
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={() => handleType("Work")} >Work</button>
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={() => handleType("Home")} >Home</button>
                    </div>
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
                {/* <div className="row container button-bar" > */}
                <div className="row m-3" >
                    <div className="col-4 d-grid gap-2 test">
                        <button type="button" className="button1 btn" onClick={(past) => handleTime("past")}>Past</button>
                        <div className='sort'>
                            <button type="button" className="btn btn-primary buttonShape bi bi-book" onClick={() => handleTypePast("School")} ></button>
                            <button type="button" className="btn btn-primary buttonShape " onClick={() => handleTypePast("Work")} >Work</button>
                            <button type="button" className="btn btn-primary buttonShape bi bi-house-door" onClick={() => handleTypePast("Home")} >Home</button>
                        </div>
                    </div>
                    <div className="col-4 d-grid gap-2 test">
                        <button type="button" className="button1 btn" onClick={(today) => handleTime("today")}>Today</button>
                        <div className='sort'>
                            <button type="button" className="btn btn-primary buttonShape bi bi-book " onClick={() => handleTypeToday("School")} ></button>
                            <button type="button" className="btn btn-primary buttonShape " onClick={() => handleTypeToday("Work")} >Work</button>
                            <button type="button" className="btn btn-primary buttonShape bi bi-house-door" onClick={() => handleTypeToday("Home")} >Home</button>
                        </div>
                    </div>
                    <div className="col-4 d-grid gap-2 test">
                        <button type="button" className="button2 btn" onClick={(future) => handleTime("future")}>Future</button>
                        <div className=' sort'>
                            <button type="button" className="btn btn-primary buttonShape bi bi-book" onClick={() => handleTypeFuture("School")} ></button>
                            <button type="button" className="btn btn-primary buttonShape " onClick={() => handleTypeFuture("Work")} >Work</button>
                            <button type="button" className="btn btn-primary buttonShape bi bi-house-door" onClick={() => handleTypeFuture("Home")} >Home</button>
                        </div>
                    </div>
                    {/* <div className="col-3 d-grid gap-2">
                        <button type="button" className="button2 btn" onClick={(all) => handleTime("all")}>All</button>
                    </div> */}
                </div>
            </div>  
                <div className="calendar"> 
                    <Calendar isScheduler={isScheduler} dateState={dateState} setDateState={setDateState} CardData={CardData} filterTask={filterTask} setFilterTask={setFilterTask}/>
                </div> 
        </div>
    )
}
export default Header;

