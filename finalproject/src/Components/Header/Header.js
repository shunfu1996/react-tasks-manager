import React from 'react';
import './Header.css';



const Header = ({CardData, display}) => {

    var today = new Date();

    var date = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+today.getDate();

    const test = () =>{
        // console.log(CardData)
        
        CardData.map((task) => {
            let { dueDate, isDisplay} = task;
        // console.log(task)
        // console.log(`now:${date}`)
        // console.log(`task:${dueDate}`)
        // console.log(dueDate === date)
        if(date === dueDate){
            display("none")
            isDisplay = "none"
            console.log(isDisplay)
            console.log(CardData)
        }
        });
    }

    return (
        <div className="placeTop card mask-custom outerShape" id='header'>
            <div className="card-body p-3 text-black row">
                {/* <div className="text-center col-3 pt-5">
                    <button type="button" className="btn btn-primary buttonShape">SORT</button>
                </div> */}
                <div className="text-center">
                    <img src="https://img.icons8.com/clouds/100/000000/todo-list.png" alt="Check" width="120"/>
                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="Check" width="60" /> */}
                    <p className="title text-center text-uppercase fw-bold topic my-1">To Do List</p>
                    </div>
                    {/* <div className="text-center col-3 pt-5">
                    <button  type="button" className="btn btn-primary buttonShape">ALL</button>
                </div> */}
            </div>
            <div className="row m-3">
                <div className="col-4 d-grid gap-2; ">
                    <button type="button" className="button1 btn" onClick={test} >Yesterday</button>
                </div>
                <div className="col-4 d-grid gap-2">
                    <button type="button" className="button2 btn">Today</button>
                </div>
                <div className="col-4 d-grid gap-2">
                    <button type="button" className="button3 btn">Tomorrow</button>
                </div>
            </div>
        </div>
    )
}
export default Header;

