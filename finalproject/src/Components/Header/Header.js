/* import { useEffect } from 'react';
import { API_GET_DATA } from '../Server/API'; */
// import { useState } from 'react';
import './Header.css';
// import { useState } from 'react';



const Header = ({ CardData, setTest, test}) => {
    // const [isDisplay, setIsDisplay] = useState("block");
    var today = new Date();

    var nowDate = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+today.getDate();

  /*   async function fetchData(filterTask) {/// get data from the db server
        const result = await fetch(API_GET_DATA); 
        const {data} = await result.json();
        filterTask(data);
    }
    useEffect(()=>{
        fetchData(filterTask); /// using data of the db server--(fetchData) set to the data--(setData)
    },[]) */
    

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
        setTest(CardData.filter(filterYesterday))
    }
    const handleToday = () =>{
        console.log(CardData)
        setTest(CardData.filter(filterToday))
    }
    const handleTomorrow = () =>{
        console.log(CardData)
        setTest(CardData.filter(filterTomorrow))
    }
    const handleAll = () =>{
        setTest(CardData)
        console.log(CardData)
    }

    return (
        <div className="placeTop card mask-custom outerShape" id='header'>
            <div className="card-body p-3 text-black row">
                {/* <div className="text-center col-3 pt-5">
                    <button type="button" className="btn btn-primary buttonShape">SORT</button>
                </div> */}
                <div className="text-center">
                    <img src="https://img.icons8.com/clouds/100/000000/todo-list.png" id="Check" alt="Check" width="120"/>
                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="Check" width="60" /> */}
                    <p className="title text-center text-uppercase fw-bold topic">To Do List</p>
                    </div>
                    {/* <div className="text-center col-3 pt-5">
                    <button  type="button" className="btn btn-primary buttonShape">ALL</button>
                </div> */}
            </div>
            <div className="row m-3">
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
        </div>
    )
}
export default Header;

