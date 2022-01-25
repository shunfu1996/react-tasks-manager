import React, {useState} from "react";
import './Data.css';


const Data = ({id, name, description, assignedTo, dueDate, deleteTask, submittingStatue}) =>{
    const [status, setStatus] = useState("TODO");
    const [color, setColor] = useState("#eae5c9");
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
    

    function deleteItem() {  //the button of delete task  function 
        submittingStatue.current = true;
        if(status === "DONE"){
            deleteTask(function(prev) {
                return prev.filter(item => item.id !== id)
            })
        }
    }
    
    
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
                        <p className=" d-flex text-left">Type: {assignedTo}</p>
                        <p className=" d-flex text-left">Description: {description}</p>
                    </div>
                    <div className="Button">
                    <button className="toDo btn text-white" onClick={handleStatus} style={{backgroundColor: color}}>{status}</button>
                    <button className="btn" type="button" class="btn btn-outline-secondary" onClick={deleteItem}>Delete</button>
                    </div>
                </div>                    
                </div>                    
        </div>
    )   
}

export default Data