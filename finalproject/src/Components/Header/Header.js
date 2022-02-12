import './Header.css';
import Calendar from  '../Calendar/Calendar'
import React, {useState, useEffect} from 'react'
const Header = ({ CardData, setFilterTask, filterTask, numberOfSchool,
                numberOfHome, numberOfWork, numberOfDone, numberOfTodo, setFilingState,
                filtingState, numberOfPast, numberOfToday, numberOfFuture}) => {
    const [dateState, setDateState] = useState(new Date())
    const [isScheduler, setIsScheduler] = useState(false)
    const [listName, setListName] = useState("To Do List")
    const [buttonAll, setButtonAll] = useState(false)
    const [buttonDone, setButtonDone] = useState(false)
    const [buttonTodo, setButtonTodo] = useState(false)

    

    useEffect(() => {
        if(filtingState === 'done'){
            setListName("Complete Task")
        }else if(filtingState === 'todo'){
            setListName("Need to Do task")
        }else if(filtingState === 'all'){
            setListName("To Do List")
        }
        
    },[filtingState])
    

    const handleIsScheduler = () =>{
        if(!isScheduler){
            setIsScheduler(!isScheduler)
            setListName("Calendar")
        } else {
            setIsScheduler(!isScheduler)
            setListName("To Do List")
        }
        setFilterTask([])
        setButtonAll(false)
        setButtonDone(false)
        setButtonTodo(false)
    }
    var nowDate = new Date().toJSON().slice(0,10).replace(/-/g,'-')
 

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
<<<<<<< HEAD
   
    const handleYesterday = () =>{
        setFilterTask(CardData.filter(filterYesterday))
        console.log(filterTask)
        setIsFilter(true)
    }
    const handleToday = () =>{
        setFilterTask(CardData.filter(filterToday))
        setIsFilter(true)
    }
    const handleTomorrow = () =>{
        setFilterTask(CardData.filter(filterTomorrow))
        setIsFilter(true)
    }
    const handleAll = () =>{
        setFilterTask(CardData)
        setIsFilter(false)
    }

    const FutureHandleSchool = () =>{
        setFilterTask((CardData.filter(filterTomorrow)).filter(task => task.type === "School"))
        setIsFilter(true)
=======

    const handleTime = (time) =>{
        if(time === "past" && filtingState === "all"){
            setFilterTask(CardData.filter(filterYesterday))
        } else if(time === "today" && filtingState === "all"){
            setFilterTask(CardData.filter(filterToday))
        } else if(time === "future" && filtingState === "all"){
            setFilterTask(CardData.filter(filterFuture))
        } else if(time === "past" && filtingState === "done"){
            setFilterTask(CardData.filter((task) => task.status === "DONE").filter(filterYesterday))
        } else if(time === "today" && filtingState === "done"){
            setFilterTask(CardData.filter((task) => task.status === "DONE").filter(filterToday))
        } else if(time === "future" && filtingState === "done"){
            setFilterTask(CardData.filter((task) => task.status === "DONE").filter(filterFuture))
        } else if(time === "past" && filtingState === "todo"){
            setFilterTask(CardData.filter((task) => task.status === "TODO").filter(filterYesterday))
        } else if(time === "today" && filtingState === "todo"){
            setFilterTask(CardData.filter((task) => task.status === "TODO").filter(filterToday))
        } else if(time === "future" && filtingState === "todo"){
            setFilterTask(CardData.filter((task) => task.status === "TODO").filter(filterFuture))
        } else if(time === "all"){
            setButtonAll(true)
            setButtonDone(false)
            setButtonTodo(false)
            setFilterTask(CardData)
            setFilingState("all")
        }
>>>>>>> bfbe4649ea7c35894aa8095faa5d9826d2da56e6
    }

    const handleTaskstatus = (status) => {
         if(status === "done"){
            setFilterTask(CardData.filter((task) => task.status === "DONE"))
            setFilingState("done")
            setButtonAll(false)
            setButtonDone(true)
            setButtonTodo(false)
        }else if(status === "todo"){
            setFilterTask(CardData.filter((task) => task.status === "TODO"))
            setFilingState("todo")
            setButtonAll(false)
            setButtonDone(false)
            setButtonTodo(true)
        }
    }
<<<<<<< HEAD
    const FutureHandleHome = () =>{
        setFilterTask((CardData.filter(filterTomorrow)).filter(task => task.type === "Home"))
        setIsFilter(true)
    }
    const TodayHandleSchool = () =>{
        setFilterTask((CardData.filter(filterToday)).filter(task => task.type === "School"))
        setIsFilter(true)
    }
    const TodayHandleWork = () =>{
        setFilterTask((CardData.filter(filterToday)).filter(task => task.type === "Work"))
        setIsFilter(true)
    }
    const TodayHandleHome = () =>{
        setFilterTask((CardData.filter(filterToday)).filter(task => task.type === "Home"))
        setIsFilter(true)
    }
    const PastHandleSchool = () =>{
        setFilterTask((CardData.filter(filterYesterday)).filter(task => task.type === "School"))
        setIsFilter(true)
    }
    const PastHandleWork = () =>{
        setFilterTask((CardData.filter(filterYesterday)).filter(task => task.type === "Work"))
        setIsFilter(true)
    }
    const PastHandleHome = () =>{
        return (
            setFilterTask((CardData.filter(filterYesterday)).filter(task => task.type === "Home")),
            setIsFilter(true)
        )
=======
    const handleType = (type) =>{
        if(type === "School" && filtingState === "done"){
        setFilterTask(CardData.filter((task) => task.status === "DONE").filter((task) => task.type === "School"))
        } else if(type === "Work" && filtingState === "done"){
        setFilterTask(CardData.filter((task) => task.status === "DONE").filter((task) => task.type === "Work"))
        } else if(type === "Home" && filtingState === "done"){
        setFilterTask(CardData.filter((task) => task.status === "DONE").filter((task) => task.type === "Home"))
        }else if(type === "School" && filtingState === "todo"){
        setFilterTask(CardData.filter((task) => task.status === "TODO").filter((task) => task.type === "School"))
        } else if(type === "Work" && filtingState === "todo"){
        setFilterTask(CardData.filter((task) => task.status === "TODO").filter((task) => task.type === "Work"))
        } else if(type === "Home" && filtingState === "todo"){
        setFilterTask(CardData.filter((task) => task.status === "TODO").filter((task) => task.type === "Home"))
        }else if(type === "School" && filtingState === "all"){
        setFilterTask(CardData.filter((task) => task.type === "School"))
        } else if(type === "Work" && filtingState === "all"){
        setFilterTask(CardData.filter((task) => task.type === "Work"))
        } else if(type === "Home" && filtingState === "all"){
        setFilterTask(CardData.filter((task) => task.type === "Home"))
        }
>>>>>>> bfbe4649ea7c35894aa8095faa5d9826d2da56e6
    }

    return (
        <div className="placeTop card mask-custom outerShape" id='header'>
<<<<<<< HEAD
            <container>
            <div className="card-body-header text-black row">
                <div className="header">
                {/* <i class="bi bi-calendar-check"></i> */}
                    {/* <button className="button1 btn list bi bi-calendar3" onClick={handleIsScheduler}>{isScheduler?(<button class="bi bi-card-checklist"></button>):(<button className="bi bi-calendar3"></button>)}</button> */}
                    <div>
                    {isScheduler?(<button onClick={handleIsScheduler} className="bi bi-list-check button1 btn list fa-customize "></button>):(<button  onClick={handleIsScheduler} className="bi bi-calendar3 button1 btn list fa-customize"></button>)}
                        {/* <button type="button" className="btn btn-primary buttonShape sort" onClick={handleAll} >All</button>
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={handleSchool} >School</button>
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={handleWork} >Work</button>
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={handleHome} >Home</button> */}
=======
            <div className="card-body p-3 text-black row">
                <div className="">
                    {isScheduler?(<button  onClick={() => handleIsScheduler("ture")} className="bi bi-list-check button1 btn list fa-customize "></button>):(<button  onClick={() =>handleIsScheduler("false")} className="bi bi-calendar3 button1 btn list fa-customize"></button>)}
                    <div className="btn-group btn-group-lg box">
                        <button type="button" className="btn " style={buttonAll?{backgroundColor:"red"}:{backgroundColor:""}} onClick={() => handleTime("all")} >
                        ALL <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{CardData.length}</span>
                        </button>
                        <button type="button" className="btn " style={buttonDone?{backgroundColor:"red"}:{backgroundColor:""}} onClick={() => handleTaskstatus("done")} >
                        Done<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfDone}</span>
                        </button>
                        <button type="button" className="btn " style={buttonTodo?{backgroundColor:"red"}:{backgroundColor:""}} onClick={() => handleTaskstatus("todo")} >
                        ToDo<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfTodo}</span>
                        </button>
>>>>>>> bfbe4649ea7c35894aa8095faa5d9826d2da56e6
                    </div>
                </div>
                    <div className="text-center image">
                        <img src="https://img.icons8.com/clouds/100/000000/todo-list.png" id="Check" alt="Check" height={"100px"}/>
                    </div>
                    <div>
<<<<<<< HEAD
                        <p className="title text-center text-uppercase topic">To Do List</p>
=======
                    <p className="title text-center text-uppercase fw-bold topic">{listName}</p>
                    <p className="now-date text-center text-uppercase fw-bold topic"> {"Date:"+ nowDate} </p>
>>>>>>> bfbe4649ea7c35894aa8095faa5d9826d2da56e6
                    </div>
            </div>
<<<<<<< HEAD
            <div  style={isScheduler?{display: "none"}:{display: "block"}} className="button-list d-flex justify-content-center">
                {/* <div className="row container button-bar" > */}
                {/* <div className="row m-3" > */}
                    <div className="d-grid gap-2 test type-1 button1">
                        <button type="button" className="btn" onClick={handleYesterday}>Past</button>
                        <div className='sort'>
                            <button type="button" className="btn buttonShape bi bi-book " onClick={PastHandleSchool} ></button>
                            <button type="button" className="btn buttonShape bi bi-pc-display " onClick={PastHandleWork} ></button>
                            <button type="button" className="btn buttonShape bi bi-house-door " onClick={PastHandleHome} ></button>
                        </div>
                    </div>
                    <div className="d-grid gap-2 test type-2 button1">
                        <button type="button" className="btn" onClick={handleToday}>Today</button>
                        <div className='sort'>
                            <button type="button" className="btn buttonShape bi bi-book" onClick={TodayHandleSchool} ></button>
                            <button type="button" className="btn buttonShape bi bi-pc-display" onClick={TodayHandleWork} ></button>
                            <button type="button" className="btn buttonShape bi bi-house-door" onClick={TodayHandleHome} ></button>
                        </div>
                    </div>
                    <div className=" d-grid gap-2 test type-3 button2">
                        <button type="button" className="btn" onClick={handleTomorrow}>Future</button>
                        <div className='sort'>
                            <button type="button" className="btn buttonShape bi bi-book" onClick={FutureHandleSchool} ></button>
                            <button type="button" className="btn buttonShape bi bi-pc-display" onClick={FutureHandleWork} ></button>
                            <button type="button" className="btn buttonShape bi bi-house-door" onClick={FutureHandleHome} ></button>
                        </div>
                    </div>
                    <div className="d-grid gap-2 test type-4 button2">
                        <button type="button" className="button2 btn" onClick={handleAll}>All</button>
=======
            <div style={isScheduler?{display: "none"}:{display: "block"}}>
                <div className="row m-3" >
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="school-button btn btn-primary position-relative buttonShape sort bi bi-book size" onClick={() => handleType("School")} >
                        School <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfSchool}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="work-button btn btn-primary position-relative buttonShape sort bi bi-pc-display size" onClick={() => handleType("Work")} >
                        Work<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfWork}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="home-button btn btn-primary position-relative buttonShape sort bi-house-door size" onClick={() => handleType("Home")} >
                        Home<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfHome}</span>
                        </button>
                    </div>
                </div>
                <div className="row m-3" >
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="past-button btn position-relative buttonShape size" onClick={(past) => handleTime("past")}>
                        Past<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfPast}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="today-button btn btn-primary position-relative buttonShape size" onClick={(today) => handleTime("today")}>
                        Today<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfToday}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="future-button btn btn-primary position-relative buttonShape size" onClick={(future) => handleTime("future")}>
                        Future<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfFuture}</span>
                        </button>
>>>>>>> bfbe4649ea7c35894aa8095faa5d9826d2da56e6
                    </div>
                {/* </div> */}
            </div>  
                <div className="calendar"> 
                    <Calendar isScheduler={isScheduler} dateState={dateState} setDateState={setDateState} CardData={CardData} filterTask={filterTask} setFilterTask={setFilterTask}/>
                </div> 
            </container>
        </div>
    )
}
export default Header;

