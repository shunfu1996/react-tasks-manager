import './Header.css';
import Calendar from  '../Calendar/Calendar'
import React, {useState} from 'react'

const Header = ({ CardData, setFilterTask, filterTask, setIsFilter}) => {
    const [dateState, setDateState] = useState(new Date());
    const [isScheduler, setIsScheduler] = useState(false)

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
    function filterTomorrow(task){
        if(nowDate < task.dueDate){
          return true
        }
    }
   
    const FutureHandleSchool = () =>{
        setFilterTask((CardData.filter(filterTomorrow)).filter(task => task.type === "School"))
        setIsFilter(true)
    }
    const FutureHandleWork = () =>{
        setFilterTask((CardData.filter(filterTomorrow)).filter(task => task.type === "Work"))
        setIsFilter(true)
    }
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
    }
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

    return (
        <div className="placeTop card mask-custom outerShape" id='header'>
            <div className="card-body p-3 text-black row">
                <div className="text-center">
                {/* <i class="bi bi-calendar-check"></i> */}
                    {/* <button className="button1 btn list bi bi-calendar3" onClick={handleIsScheduler}>{isScheduler?(<button class="bi bi-card-checklist"></button>):(<button className="bi bi-calendar3"></button>)}</button> */}
                    <div>
                    {isScheduler?(<button  onClick={handleIsScheduler} className="bi bi-list-check button1 btn list fa-customize "></button>):(<button  onClick={handleIsScheduler} className="bi bi-calendar3 button1 btn list fa-customize"></button>)}
                        {/* <button type="button" className="btn btn-primary buttonShape sort" onClick={handleAll} >All</button>
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={handleSchool} >School</button>
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={handleWork} >Work</button>
                        <button type="button" className="btn btn-primary buttonShape sort" onClick={handleHome} >Home</button> */}
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
                    <div className="col-3 d-grid gap-2 test">
                        <button type="button" className="button1 btn" onClick={handleYesterday}>Past</button>
                        <div className='sort'>
                            <button type="button" className="btn btn-primary buttonShape " onClick={PastHandleSchool} >School</button>
                            <button type="button" className="btn btn-primary buttonShape " onClick={PastHandleWork} >Work</button>
                            <button type="button" className="btn btn-primary buttonShape " onClick={PastHandleHome} >Home</button>
                        </div>
                    </div>
                    <div className="col-3 d-grid gap-2 test">
                        <button type="button" className="button1 btn" onClick={handleToday}>Today</button>
                        <div className='sort'>
                            <button type="button" className="btn btn-primary buttonShape " onClick={TodayHandleSchool} >School</button>
                            <button type="button" className="btn btn-primary buttonShape " onClick={TodayHandleWork} >Work</button>
                            <button type="button" className="btn btn-primary buttonShape " onClick={TodayHandleHome} >Home</button>
                        </div>
                    </div>
                    <div className="col-3 d-grid gap-2 test">
                        <button type="button" className="button2 btn" onClick={handleTomorrow}>Future</button>
                        <div className=' sort'>
                            <button type="button" className="btn btn-primary buttonShape " onClick={FutureHandleSchool} >School</button>
                            <button type="button" className="btn btn-primary buttonShape " onClick={FutureHandleWork} >Work</button>
                            <button type="button" className="btn btn-primary buttonShape " onClick={FutureHandleHome} >Home</button>
                        </div>
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

