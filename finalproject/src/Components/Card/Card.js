import React from 'react';
import './Card.css';
import { useState } from 'react';
import { v4 } from 'uuid';

//create a new card
const Card = ({ add, submittingStatue }) => {
    // change the input value
    const [name, setName] = useState("")  
    function nameChange(e) {
        setName(e.target.value)
    }
    const [description, setDescription] = useState("")
    function descriptionChange(e) {
        setDescription(e.target.value)
    }
    const [assignedTo, setAssignedTo] = useState("")
    function assignedToChange(e) {
        setAssignedTo(e.target.value)
    }
    const [dueDate, setDueDate] = useState("")
    function dueDateChange(e) {
        setDueDate(e.target.value)
    }
    
    function addItem(e) {
        const errorMessage = document.querySelector('#error');
        e.preventDefault(); // to prevent the web F5
        if(!validInput(name)){
            errorMessage.innerHTML = "please enter the name "; //check the input is correct
            errorMessage.style.display = "block";
        } else if(!validInput(description)){
            errorMessage.innerHTML = "please enter the description";
            errorMessage.style.display = "block";
        }  else if(!validInput(assignedTo)){
            errorMessage.innerHTML = "please assigned to the correct messenge";
            errorMessage.style.display = "block";
        }  else if(!validInput(dueDate)){
            errorMessage.innerHTML = "please choose a date";
            errorMessage.style.display = "block";
        }  else{
            errorMessage.style.display = "none";
            submittingStatue.current = true ;
            add(function(prevData){
                return [
                    {   
                        id: v4(),
                        name,
                        description,
                        assignedTo,
                        dueDate,
                    },
                    ...prevData,
                ];
            })    
                setDueDate("");
                setAssignedTo("");
                setDescription("");
                setName("");
        }    

         
    }

    function validInput (data) {
        return data !== null && data !== ''; // the input cannot empty 
    }

    return(
        <div className="cardShape" id="card">
            <div className="row">
                <div className="col form">
                    <h2>Edit New Task</h2>
                    <form id="newTaskForm">
                        <label htmlFor="newTaskName">Name</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  id="newTaskName"  value={name} onChange={nameChange} />
                        </div>
                        <label htmlFor="newTaskDescription">Description</label>
                        <div className="input-group mb-3">
                            <textarea className="form-control" aria-label="With textarea" id="newTaskDescription" value={description} onChange={descriptionChange} ></textarea>
                        </div>
                        
                        <div className="row">
                            
                            <div className="form-group col mb-3">
                                <label htmlFor="newTaskAssigned">Assigned To</label>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="newTaskAssignedTo" value={assignedTo} onChange={assignedToChange} />
                            </div>
                            <div className="form-group col mb-3">
                                <label htmlFor="newTaskDueDate">Due Date</label>
                                <input type="date" className="form-control" id="newTaskDueDate" value={dueDate} onChange={dueDateChange} />
                            </div>
                        </div>
                        <div id="error" className="alert alert-warning warning" role="alert">
                        A simple warning alert—check it out!
                        </div>
                        <button type="submit" className="btn btn-primary btn-block d-grid gap-2 col-6 mx-auto mb-3 " onClick={addItem}>Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    
        )
}
    


export default Card;