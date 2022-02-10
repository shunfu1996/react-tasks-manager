import React, {useState} from "react";
import { confirm } from "react-confirm-box";
import './Data.css';
import check from "./check.png";


// const Data = ({id, name, description, assignedTo, dueDate, deleteTask, submittingStatue, edit, updateTodo}) =>{
const Data = ({status, BackGroundColor, id, name, description, type, dueDate, deleteTask, submittingStatue, setFilterTask, CardData}) => {
    // const [status, setStatus] = useState("TODO");
    // const [color, setColor] = useState("#eae5c9");
    const [editDate, seteditDate] = useState(dueDate);
    const [editName, seteditName] = useState(name);
    const [editType, seteditType] = useState(type);
    const [editDescription, seteditDescription] = useState(description);
    const [editBackgroundColor, seteditBackgroundColor] = useState(BackGroundColor);
    // const [editStatus, seteditStatus] = useState(status);
    // const [text, setText] = useState('');
    // const [res, setRes] = useState(null);
    // change the task status function

    // todo.status === "TODO" ? setColor("#eae5c9") : setColor("#6cc6cd")

    function handleStatus(id){
        const updatedStatus = [...CardData].map((todo) =>{
            if (todo.id === id && todo.status === "DONE") {
                todo.status = "TODO";
                // setColor("#eae5c9");
            } else if (todo.id === id && todo.status === "TODO") {
                todo.status = "DONE";
                // setColor("#6cc6cd")
            }
            return todo;
        })
        console.log(CardData[0].status)
        console.log(CardData[0])
        deleteTask(updatedStatus); 

        // if(editStatus === "TODO"){
        //     seteditStatus("DONE");
        //     setColor("#6cc6cd")
        //     setDone(true)
        // } else if(editStatus === "DONE"){
        //     seteditStatus("TODO");
        //     setColor("#eae5c9");
        //     setDone(false)
        // }
    }

    // editing 係名, setEditing 係function, 起初值係false
    const [editing, setEditing] = useState(false); 

      function submitEdits(id) {  // edit function map 左之前的 array
        submittingStatue.current = true;
        const updatedTodos = [...CardData].map((todo) => {
          if (todo.id === id) {
            todo.name = editName;
            todo.description = editDescription;
            todo.type = editType;
            todo.dueDate = editDate;
            todo.BackGroundColor = editBackgroundColor;
          }
          return todo;
        });
        deleteTask(updatedTodos);
        setEditing(!editing)
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
            if(e.target.value === "School"){
                seteditType(e.target.value)
                seteditBackgroundColor("red")
            } else if(e.target.value === "Home"){
                seteditType(e.target.value)
                seteditBackgroundColor("blue")
            } else if(e.target.value === "Work"){
                seteditType(e.target.value)
                seteditBackgroundColor("yellow")
            }
        }
        const handleDescriptionChange = (e) => {
            seteditDescription(e.target.value)  
        }


   
    async function deleteItem() {  //the button of delete task  function 
        submittingStatue.current = true;
        if(status === "DONE"){
            deleteTask(function(prev) {
                return prev.filter(item => item.id !== id)
            })
            setFilterTask(function(prev) {   // keep the screen is show correct data
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
        }
    }
    
    return(
        <div className="card row midShape nopadding place dateShape" >
            <div>
            {status === "DONE" &&<img className="check" id="background" src={check} alt="mark done" />}
            </div>
            {!editing &&<div className="card-header text-center" id="myList" role="tablist" style={{backgroundColor: editBackgroundColor}} >Task Name: {name} </div>}
            {editing &&<div className="row">
            <label className=" text-center card-header-edit" >Task Name: <input className="card-header" id="myList" role="tablist" type="text" value={editName} onChange={handleNameChange}/> </label>
            </div>}
                <div className="d-flex justify-content-around">
                <div className="card-body" >
                    {!editing && <div className="tab-pane active" id="home" role="tabpanel" >
                        <p className="d-flex text-left">Due Date: {dueDate}</p>
                        <p className="d-flex text-left">Type: {type}</p>
                        <p className="d-flex text-left">Description: {description}</p>
                    </div> }
                    {editing && <div className="tab-pane active" id="home" role="tabpanel" >
                                    <span>Due Date:</span><input className=" d-flex text-left form-control" type="date" value={editDate} onChange={handleTextChange}/>
                                    {/* <span>Type:</span><input className=" d-flex text-left form-control" type="text" value={editType} onChange={handleTypeChange}/> */}
                                    <label>Type Of</label>
                                    <div>
                                    <select className="form-select" aria-label="Default select example" aria-describedby="inputGroup-sizing-sm" id="newTaskAssignedTo" value={editType} onChange={handleTypeChange} >
                                        <option>Home</option>
                                        <option>School</option>
                                        <option>Work</option>
                                    </select>
                                    </div>
                                    <span>Description:</span><textarea className=" d-flex text-left form-control" type="text" value={editDescription} onChange={handleDescriptionChange}></textarea>
                                </div>}
                    {/* <img className="check" id="background" src={check} /> */}
                    <div className="Button">
                        {editing ? ( <button className="btn edit" onClick={() => submitEdits(id)}>Save</button> ) : ( 
                            <div>
                                {status === "TODO" &&<button className="btn edit" onClick={clickEdit}>Edit</button>}
                                {status === "TODO"?<button className=" btn text-white" onClick={() => handleStatus(id)} style={{backgroundColor: "#eae5c9"}}>{status}</button>
                                :<button className=" btn text-white" onClick={() => handleStatus(id)} style={{backgroundColor: "#6cc6cd"}}>{status}</button> }
                                {/* <img className="check" id="background" src={check} /> */}
                                <button className="btn btn btn-outline-secondary isDisplay" type="button" onClick={() => deleteItem()}>Delete</button>
                            </div>)}
                    </div>
                </div>                    
            </div>                    
        </div>
    )   
}

export default Data