import React, {useState} from "react";
import { confirm } from "react-confirm-box";
import './Data.css';


const Data = ({id, name, description, assignedTo, dueDate, deleteTask, submittingStatue}) =>{
    const [status, setStatus] = useState("TODO");
    const [color, setColor] = useState("#eae5c9");
    // const [res, setRes] = useState(null);
    // change the task status function
    function handleStatus(){
        if(status === "TODO"){
        setStatus("DONE");
        setColor("#6cc6cd");
        //id.style.display = 'none'
        } else if(status === "DONE"){
        setStatus("TODO");
        setColor("#eae5c9");
        }
    }
    

    async function deleteItem() {  //the button of delete task  function 
        submittingStatue.current = true;
        if(status === "DONE"){
            deleteTask(function(prev) {
                return prev.filter(item => item.id !== id)
            })
        } else {
            const result = await confirm("Are you sure?");
            if (result) {
            deleteTask(function(prev) {
                return prev.filter(item => item.id !== id)
            })
            }
            console.log("You click No!");
        }
    }
    

  /*   async function deleteItem() {  //the button of delete task  function 
        const result = await confirm("Are you sure?");
        if (result) {
          console.log("You click yes!");
          return;
        }
        console.log("You click No!");
    } */
    
    
    //the date format
    return(
        <div className="card row midShape nopadding place dateShape">
            <div className="card-header text-center" id="myList" role="tablist" >Task Name: {name} </div>
                <div className="d-flex justify-content-around">
                {/* <p className="list-group-item list-group-item-action d-flex justify-content-center" data-toggle="list" href="#home" role="tab">Task Name: {name}</p>   */}
                {/* <p className="list-group d-flex justify-content-center" role="tab">Task Name: {name}</p>   */}
                {/* <button onClick={deleteItem}>delete</button> */}
                {/* <div className="tab-content"> */}
                <div className="card-body">
                    <div className="tab-pane active" id="home" role="tabpanel">
                        <p className=" d-flex text-left">Due Date: {dueDate}</p>
                        <p className=" d-flex text-left">Assgined To: {assignedTo}</p>
                        <p className=" d-flex text-left">Description: {description}</p>
                    </div>
                    <div className="Button">
                    <button className="toDo btn text-white" onClick={handleStatus} style={{backgroundColor: color}}>{status}</button>
                    <button className="btn btn btn-outline-secondary" type="button" onClick={deleteItem}>Delete</button>
                    </div>
                </div>                    
                </div>                    
        </div>
    )   
}

export default Data