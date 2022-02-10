import './Header.css';
import Calendar from  '../Calendar/Calendar'
import React, {useState, useEffect} from 'react'
import HomeImg from './Home.jpg';
import WorkImg from './Work.jpg';
import SchoolImg from './School.jpg';
const Header = ({ CardData, setFilterTask, filterTask, setIsFilter, numberOfSchool,
                numberOfHome, numberOfWork, numberOfDone, numberOfTodo, setFilingState,
                filtingState, setBackgroundImage, numberOfPast, numberOfToday, numberOfFuture}) => {
    const [dateState, setDateState] = useState(new Date())
    const [isScheduler, setIsScheduler] = useState(false)
    const [listName, setListName] = useState("To Do List")
    const [buttonAll, setButtonAll] = useState(false)
    const [buttonDone, setButtonDone] = useState(false)
    const [buttonTodo, setButtonTodo] = useState(false)
    // const [numOfType, setNumOfType] = useState(CardData.length)
    

    

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
        setIsScheduler(!isScheduler)
        setFilterTask([])
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

    /* const handleTypeFuture = (type) =>{
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
    } */

    /* const handleTypeToday = (type) =>{
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
    } */
 
   /*  const handleTypePast = (type) =>{
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
    } */
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
        setBackgroundImage(null)
    }

    const handleTaskstatus = (status) => {
         if(status === "done"){
            setFilterTask(CardData.filter((task) => task.status === "DONE"))
            setFilingState("done")
            setButtonAll(false)
            setButtonDone(true)
            setButtonTodo(false)
            // setIsFilter(true)
            // setNumOfType(numberOfTodo)
        }else if(status === "todo"){
            setFilterTask(CardData.filter((task) => task.status === "TODO"))
            setFilingState("todo")
            setButtonAll(false)
            setButtonDone(false)
            setButtonTodo(true)
            // setIsFilter(true)
            // setNumOfType(CardData.length)
        }
    }
    const handleType = (type) =>{
        if(type === "School" && filtingState === "done"){
        setFilterTask(CardData.filter((task) => task.status === "DONE").filter((task) => task.type === "School"))
        setBackgroundImage(SchoolImg)
        } else if(type === "Work" && filtingState === "done"){
        setFilterTask(CardData.filter((task) => task.status === "DONE").filter((task) => task.type === "Work"))
        setBackgroundImage(WorkImg)
        } else if(type === "Home" && filtingState === "done"){
        setFilterTask(CardData.filter((task) => task.status === "DONE").filter((task) => task.type === "Home"))
        setBackgroundImage(HomeImg)
        }else if(type === "School" && filtingState === "todo"){
        setFilterTask(CardData.filter((task) => task.status === "TODO").filter((task) => task.type === "School"))
        setBackgroundImage(SchoolImg)
        } else if(type === "Work" && filtingState === "todo"){
        setFilterTask(CardData.filter((task) => task.status === "TODO").filter((task) => task.type === "Work"))
        setBackgroundImage(WorkImg)
        } else if(type === "Home" && filtingState === "todo"){
        setFilterTask(CardData.filter((task) => task.status === "TODO").filter((task) => task.type === "Home"))
        setBackgroundImage(HomeImg)
        }else if(type === "School" && filtingState === "all"){
        setFilterTask(CardData.filter((task) => task.type === "School"))
        setBackgroundImage(SchoolImg)
        } else if(type === "Work" && filtingState === "all"){
        setFilterTask(CardData.filter((task) => task.type === "Work"))
        setBackgroundImage(WorkImg)
        } else if(type === "Home" && filtingState === "all"){
        setFilterTask(CardData.filter((task) => task.type === "Home"))
        setBackgroundImage(HomeImg)
        }
    }

    return (
        <div className="placeTop card mask-custom outerShape" id='header'>
            <div className="card-body p-3 text-black row">
                <div className="">
                    {isScheduler?(<button  onClick={handleIsScheduler} className="bi bi-list-check button1 btn list fa-customize "></button>):(<button  onClick={handleIsScheduler} className="bi bi-calendar3 button1 btn list fa-customize"></button>)}
                    <div className="btn-group btn-group-lg box">
                        <button type="button" className="btn " style={buttonAll?{backgroundColor:"red"}:{backgroundColor:""}} onClick={() => handleTime("all")} >
                        ALL <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size">{CardData.length}</span>
                        </button>
                        <button type="button" className="btn " style={buttonDone?{backgroundColor:"red"}:{backgroundColor:""}} onClick={() => handleTaskstatus("done")} >
                        Done<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size">{numberOfDone}</span>
                        </button>
                        <button type="button" className="btn " style={buttonTodo?{backgroundColor:"red"}:{backgroundColor:""}} onClick={() => handleTaskstatus("todo")} >
                        ToDo<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size">{numberOfTodo}</span>
                        </button>
                    </div>
                </div>
                    <div className="text-center">
                        <img src="https://img.icons8.com/clouds/100/000000/todo-list.png" id="Check" alt="Check" width="120"/>
                    </div>
                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="Check" width="60" /> */}
                    <div>
                    <p className="title text-center text-uppercase fw-bold topic">{listName}</p>
                    </div>
                    {/* <div className="text-center col-3 pt-5">
                    <button  type="button" className="btn btn-primary buttonShape">ALL</button>
                </div> */}
            </div>
            <div style={isScheduler?{display: "none"}:{display: "block"}}>
                {/* <div className="row container button-bar" > */}
                <div className="row m-3" >
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="button1 btn btn-primary position-relative buttonShape sort bi bi-book size" onClick={() => handleType("School")} >
                        School <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size">{numberOfSchool}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="button1 btn btn-primary position-relative buttonShape sort bi bi-pc-display size" onClick={() => handleType("Work")} >
                        Work<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size">{numberOfWork}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="button1 btn btn-primary position-relative buttonShape sort bi-house-door size" onClick={() => handleType("Home")} >
                        Home<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size">{numberOfHome}</span>
                        </button>
                    </div>
                </div>
                <div className="row m-3" >
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="button1 btn btn-primary position-relative buttonShape size" onClick={(past) => handleTime("past")}>
                        Past<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size">{numberOfPast}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="button1 btn btn-primary position-relative buttonShape size" onClick={(today) => handleTime("today")}>
                        Today<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size">{numberOfToday}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="button1 btn btn-primary position-relative buttonShape size" onClick={(future) => handleTime("future")}>
                        Future<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size">{numberOfFuture}</span>
                        </button>
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

