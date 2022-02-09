import React, {useState} from "react";
import { confirm } from "react-confirm-box";
import './Data.css';
import Check from "./check.jpg";

// const Data = ({id, name, description, assignedTo, dueDate, deleteTask, submittingStatue, edit, updateTodo}) =>{
const Data = ({id, name, description, type, dueDate, deleteTask, submittingStatue, setFilterTask, CardData, submitEdit, filterTask}) => {
    const [status, setStatus] = useState("TODO");
    const [color, setColor] = useState("#eae5c9");
    const [editDate, seteditDate] = useState(dueDate);
    const [editName, seteditName] = useState(name);
    const [editType, seteditType] = useState(type);
    const [editDescription, seteditDescription] = useState(description);
    // const [text, setText] = useState('');
    // const [res, setRes] = useState(null);
    // change the task status function



    function handleStatus(){
        if(status === "TODO"){
        setStatus("DONE");
        setColor("#6cc6cd");
        document.getElementById('check').style.display="inline";
        //id.style.display = 'none'
    } else if(status === "DONE"){
        setStatus("TODO");
        setColor("#eae5c9");
        document.getElementById('check').style.display="none";
        }
    }

    // editing 係名, setEditing 係function, 起初值係false
    const [editing, setEditing] = useState(false); 

      function submitEdits(id) {  // edit function map 左之前的 array
        submittingStatue.current = true;
        const updatedTodos = [...filterTask].map((todo) => {
          if (todo.id === id) {
            todo.name = editName;
            todo.description = editDescription;
            todo.type = editType;
            todo.dueDate = editDate;
          }
          return todo;
        });
        deleteTask(updatedTodos);
        // setTodoEditing(null);
        setEditing(!editing)
        console.log(editing);
      }

      function clickEdit() { 
        setEditing(!editing) // click edit 時反轉

      }

    const handleTextChange = (e) => {
        seteditDate(e.target.value)
    }
    const handleNameChange = (e) => {
        seteditName(e.target.value)
    }
    const handleTypeChange = (e) => {
        seteditType(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        seteditDescription(e.target.value)
        console.log(handleDescriptionChange)
    }


   
    async function deleteItem() {  //the button of delete task  function 
        submittingStatue.current = true;
        if(status === "DONE"){
            deleteTask(function(prev) {
                return prev.filter(item => item.id !== id)
            })
            setFilterTask(function(prev) {
                return prev.filter(item => item.id !== id)
            });
        } else {
            const result = await confirm("Are you sure to delete?");
            if (result) {
            deleteTask(function(prev) {
                return prev.filter(item => item.id !== id)      
            })
            setFilterTask(function(prev) {
                return prev.filter(item => item.id !== id)
            });
            }
            console.log("You click No!");
        }
    }
    
    return(
        <div className="card row midShape nopadding place dateShape" >
            {!editing &&<div className="card-header text-center" id="myList" role="tablist" >Task Name: {name} </div>}
            {editing && <div className="row">
            <label className="col-6 text-end card-header-edit" >Task Name: </label><input className="card-header text-left col-6 " id="myList" role="tablist" type="text" value={editName} onChange={handleNameChange}/>
            </div>}
                <div className="d-flex justify-content-around">
                <div className="card-body" >
                    {!editing && <div className="tab-pane active" id="home" role="tabpanel" >
                        <p className=" d-flex text-left ">Due Date: {dueDate}</p>
                        <p className=" d-flex text-left">Type: {type}</p>
                        <p className=" d-flex text-left">Description: {description}</p>
                    </div> }
                    {editing && <div className="tab-pane active" id="home" role="tabpanel" >
                        <span>Due Date:</span><input className=" d-flex text-left form-control" type="date" value={editDate} onChange={handleTextChange}/>
                        {/* <span>Type:</span><input className=" d-flex text-left form-control" type="text" value={editType} onChange={handleTypeChange}/> */}
                        <label>Type Of</label>
                        <select class="form-select" aria-label="Default select example" aria-describedby="inputGroup-sizing-sm" id="newTaskAssignedTo" value={editType} onChange={handleTypeChange} >
                            <option selected>Choose</option>
                            <option>Home</option>
                            <option>School</option>
                            <option>Work</option>
                        </select>
                        <span>Description:</span><textarea className=" d-flex text-left form-control" type="text" value={editDescription} onChange={handleDescriptionChange}></textarea>
                    </div>}
                    <div className="Button ">
                        {editing ? ( <button className="btn edit" onClick={() => submitEdits(id)}>Save</button> ) : ( 
                            <div>
                                <button className="btn edit" onClick={clickEdit}>Edit</button>
                                <button className=" btn text-white" onClick={handleStatus} style={{backgroundColor: color}}>{status}</button>
                                <button className="btn btn btn-outline-secondary isDisplay" type="button" onClick={() => deleteItem()}>Delete</button>
                            </div>)}
                    </div>
                </div>                    
            </div>                    
        </div>
    )   
}

export default Data