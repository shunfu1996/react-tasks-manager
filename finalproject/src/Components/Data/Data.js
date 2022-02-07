import React, {useState} from "react";
import { confirm } from "react-confirm-box";
import './Data.css';

// const Data = ({id, name, description, assignedTo, dueDate, deleteTask, submittingStatue, edit, updateTodo}) =>{
const Data = ({id, name, description, assignedTo, dueDate, deleteTask, submittingStatue, setFilterTask, CardData, submitEdit, filterTask}) => {
    const [status, setStatus] = useState("TODO");
    const [color, setColor] = useState("#eae5c9");
    const [editDate, seteditDate] = useState(dueDate);
    const [editName, seteditName] = useState(name);
    const [editType, seteditType] = useState(assignedTo);
    const [editDescription, seteditDescription] = useState(description);
    // const [text, setText] = useState('');
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

    // editing 係名, setEditing 係function, 起初值係false
    const [editing, setEditing] = useState(false); 

      function submitEdits(id) { 
        submittingStatue.current = true;
        const updatedTodos = [...filterTask].map((todo) => {
          if (todo.id === id) {
            todo.name = editName;
            todo.description = editDescription;
            todo.assignedTo = editType;
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
        setEditing(!editing)

      }
    // const handleEdit = () =>{
        // e.preventDefault();
        // submittingStatue.current = false;
        // if(status === "Edit"){
        //     editTask(function(prev) {
        //         return prev.filter(item => item.id !== id)
        //     })
        // }


        // setEditing(!editing)
        // console.log(editing)
    // }

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

    // const handleEditFormSubmit = (event) => {
    //     event.preventDefault();

    //     const editedContact = {
    //         setText: editedContact.setText,
    //     };

    //     const newText = text;

    //     const index = text.findIndex

        
    // }
    

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
            <div style={editing?{display: "block"}:{display: "none"}} class="row">
            <label className="col-6 text-end card-header-edit" >Task Name: </label><input className="card-header text-left col-6 " id="myList" role="tablist" type="text" value={editName} onChange={handleNameChange}/>
            </div>
                <div className="d-flex justify-content-around">
                {/* <p className="list-group-item list-group-item-action d-flex justify-content-center" data-toggle="list" href="#home" role="tab">Task Name: {name}</p>   */}
                {/* <p className="list-group d-flex justify-content-center" role="tab">Task Name: {name}</p>   */}
                {/* <button onClick={deleteItem}>delete</button> */}
                {/* <div className="tab-content"> */}
                <div className="card-body" >
                    <div className="tab-pane active" id="home" role="tabpanel" style={editing?{display: "none"}:{display: "block"}}>
                        <p className=" d-flex text-left ">Due Date: {dueDate}</p>
                        <p className=" d-flex text-left">Type: {assignedTo}</p>
                        <p className=" d-flex text-left">Description: {description}</p>
                    </div>
                    <div className="tab-pane active" id="home" role="tabpanel" style={editing?{display: "block"}:{display: "none"}}>
                        <span>Due Date:</span><input className=" d-flex text-left form-control" type="date" value={editDate} onChange={handleTextChange}/>
                        <span>Type:</span><input className=" d-flex text-left form-control" type="text" value={editType} onChange={handleTypeChange}/>
                        <span>Description:</span><textarea className=" d-flex text-left form-control" type="text" value={editDescription} onChange={handleDescriptionChange}></textarea>
                        {/* <input className=" d-flex text-left" value="edting" />
                        <input className=" d-flex text-left" value="edting" /> */}
                    </div>
                    <div className="Button">
                        {/* <button className="btn edit" onClick={submitEdits}>{editing?"Save":"Edit"}</button> */}
                        {editing ? ( <button className="btn edit" onClick={() => submitEdits(id)}>Save</button> ) : ( <button className="btn edit" onClick={clickEdit}>Edit</button> )}
                        <button className="toDo btn text-white" onClick={handleStatus} style={{backgroundColor: color}}>{status}</button>
                        <button className="btn btn btn-outline-secondary" type="button" onClick={() => deleteItem()}>Delete</button>
                    </div>
                </div>                    
            </div>                    
        </div>
    )   
}

export default Data