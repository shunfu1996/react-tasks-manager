import React, {useState} from "react";
import { confirm } from "react-confirm-box";
import './Data.css';

// const Data = ({id, name, description, assignedTo, dueDate, deleteTask, submittingStatue, edit, updateTodo}) =>{
const Data = ({id, name, description, assignedTo, dueDate, deleteTask, submittingStatue}) => {
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
    // function editing(){

    //     const [edit, setEdit] = useState ({
    //         id: null,
    //         value: ''
    //     });
    }

    // const submitUpdate = value => {
    //     updateTodo(id, name, description, assignedTo, dueDate, value);
    //     setEdit({
    //         prevData
    //     });
    //   };
    
    //   if (edit.id) {
    //     return <Task edit={edit} onSubmit={submitUpdate} />;
    //   }
    

    // }
    const [editing, setEditing] = useState(false)

    const handleEdit = () =>{
        setEditing(!editing)
        console.log(editing)
    }
    

    async function deleteItem() {  //the button of delete task  function 
        submittingStatue.current = true;
        if(status === "DONE"){
            deleteTask(function(prev) {
                return prev.filter(item => item.id !== id)
            })
        } else {
            const result = await confirm("Are you sure to delete?");
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
        <div className="card row midShape nopadding place dateShape" /* style={{display: isDisplay}} */>
            <div className="card-header text-center" id="myList" role="tablist" style={editing?{display: "none"}:{display: "block"}} >Task Name: {name} </div>
            <div style={editing?{display: "block"}:{display: "none"}}>
            <span>Task Name: </span><input className="card-header text-center" id="myList" role="tablist" />
            </div>
                <div className="d-flex justify-content-around">
                {/* <p className="list-group-item list-group-item-action d-flex justify-content-center" data-toggle="list" href="#home" role="tab">Task Name: {name}</p>   */}
                {/* <p className="list-group d-flex justify-content-center" role="tab">Task Name: {name}</p>   */}
                {/* <button onClick={deleteItem}>delete</button> */}
                {/* <div className="tab-content"> */}
                <div className="card-body" >
                    <div className="tab-pane active" id="home" role="tabpanel" style={editing?{display: "none"}:{display: "block"}}>
                        <p className=" d-flex text-left">Due Date: {dueDate}</p>
                        <p className=" d-flex text-left">Type: {assignedTo}</p>
                        <p className=" d-flex text-left">Description: {description}</p>
                    </div>
                    <div className="tab-pane active" id="home" role="tabpanel" style={editing?{display: "block"}:{display: "none"}}>
                        <span>Due Date:</span><input className=" d-flex text-left" type="text" value="name" />
                        <span>Type:</span><input className=" d-flex text-left" type="text" value="name" />
                        <span>Description:</span><input className=" d-flex text-left" type="text" value="name" />
                        {/* <input className=" d-flex text-left" value="edting" />
                        <input className=" d-flex text-left" value="edting" /> */}
                    </div>
                    <div className="Button">
                        <button className="btn edit" onClick={handleEdit}>{editing?"Ok":"Edit"}</button>
                        <button className="toDo btn text-white" onClick={handleStatus} style={{backgroundColor: color}}>{status}</button>
                        <button className="btn btn btn-outline-secondary" type="button" onClick={() => deleteItem()}>Delete</button>
                    </div>
                </div>                    
            </div>                    
        </div>
    )   
}

export default Data