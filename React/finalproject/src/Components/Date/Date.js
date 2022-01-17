import React from "react";
import './Date.css';


const Date = ({status, id, name, description, assignedTo, dueDate, deleteTask}) =>{

    function deleteItem() {  //the button of delete task  function 
        deleteTask(function(prev) {
            return prev.filter(item => item.id !== id)
        })
    }
    function handleStatus() {  // change the task status function
        const taskStatus = document.getElementById("status");
        if(taskStatus.innerHTML === 'TODO'){
            taskStatus.innerHTML = 'DONE';
            taskStatus.style.backgroundColor = 'green';
        } else if (taskStatus.innerHTML === 'DONE'){
            taskStatus.innerHTML = 'TODO';
            taskStatus.style.backgroundColor = 'red';
        } else {
            console.log('TODO button is error')
        }

    }
    //the date format
    return(
        <div className="row midShape nopadding place dateShape">
                <div className="list-group" id="myList" role="tablist">
                    <div className="d-flex justify-content-around">
                        <button id="status" className="toDo" onClick={handleStatus} >{status}</button>
                        <a className="list-group-item list-group-item-action active  d-flex justify-content-center" data-toggle="list" href="#home" role="tab">Task Name: {name}</a>  
                        <button onClick={deleteItem}>delete</button>
                    </div>
                </div>                    
                <div className="tab-content">
                    <div className="tab-pane active" id="home" role="tabpanel">
                        <p className=" d-flex justify-content-center">Assgined To: {assignedTo}</p>
                        <p className=" d-flex justify-content-center">Description: {description}</p>
                        <p className=" d-flex justify-content-center">Due Date: {dueDate}</p>
                    </div>
                </div>
            </div>
    )   
}

export default Date