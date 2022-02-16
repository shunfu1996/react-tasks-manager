import './Header.css';
import Calendar from  '../Calendar/Calendar'
import React, {useState, useEffect} from 'react'
const Header = ({ CardData, setFilterTask, filterTask, numberOfSchool,
                numberOfHome, numberOfWork, numberOfDone, numberOfTodo, setFilingState,

                filtingState, numberOfPast, numberOfToday, numberOfFuture}, props) => {

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
    }

    return (
        <div className="placeTop card mask-custom outerShape" id='header'>
            <container>
            <div className="card-body p-3 text-black row">
                <div className="">
                    {isScheduler?(<button  onClick={() => handleIsScheduler("ture")} className="bi bi-list-check button1 btn list fa-customize "></button>):(<button  onClick={() =>handleIsScheduler("false")} className="bi bi-calendar3 button1 btn list fa-customize"></button>)}

                    <div className="btn-group box">
                        <button type="button" className="btn btn1" style={buttonAll?{backgroundColor:"#6cc6cd"}:{backgroundColor:""}} onClick={() => handleTime("all")} >
                        ALL <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{CardData.length}</span>
                        </button>
                        <button type="button" className="btn" style={buttonDone?{backgroundColor:"#6cc6cd"}:{backgroundColor:""}} onClick={() => handleTaskstatus("done")} >
                        Done<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfDone}</span>
                        </button>
                        <button type="button" className="btn btn2" style={buttonTodo?{backgroundColor:"#6cc6cd"}:{backgroundColor:""}} onClick={() => handleTaskstatus("todo")} >

                        ToDo<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfTodo}</span>
                        </button>
                    </div>
                </div>
                    <div className="text-center image">
                        <img src="https://img.icons8.com/clouds/100/000000/todo-list.png" id="Check" alt="Check" height={"100px"}/>
                    </div>
                    <div>
                    <p className="title text-center text-uppercase fw-bold topic">{listName}</p>
                    <p className="now-date text-center text-uppercase fw-bold topic"> {"Date:"+ nowDate} </p>
                    </div>
            </div>
            <div style={isScheduler?{display: "none"}:{display: "block"}}>
                <div className="row m-3" >
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="school-button btn btn-primary position-relative buttonShape sort bi bi-book size" onClick={() => handleType("School")} >
                        School <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfSchool}</span>
                        </button>

                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="work-button btn position-relative buttonShape sort bi bi-pc-display size" onClick={() => handleType("Work")} >
                        Work<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfWork}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="home-button btn position-relative buttonShape sort bi-house-door size" onClick={() => handleType("Home")} >
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
                        <button type="button" className="today-button btn position-relative buttonShape size" onClick={(today) => handleTime("today")}>
                        Today<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfToday}</span>
                        </button>
                    </div>
                    <div className="col-4 d-grid gap-2 ">
                        <button type="button" className="future-button btn position-relative  size" onClick={(future) => handleTime("future")}>
                        Future<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary size-num">{numberOfFuture}</span>
                        </button>
                    </div>
                {/* </div> */}
            </div>  
            </div>  
                <div className="calendar"> 
                    <Calendar isScheduler={isScheduler} dateState={dateState} setDateState={setDateState} CardData={CardData} filterTask={filterTask} setFilterTask={setFilterTask}/>
                </div> 
            </container>
        </div>
    )
}
export default Header;

