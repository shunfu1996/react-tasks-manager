import React from 'react';
import './Card.css';
import { useState } from 'react';


const Card = ({add}) => {

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
        e.preventDefault();
        add(function(prevDate){
            return [
                ...prevDate,
                {   
                    name,
                    description,
                    assignedTo,
                    dueDate
                }]
        })    
    }

    return(
        <div className="cardShape" id="card">
            <div className="row">
                <div className="col form">
                    <h2>New Task</h2>
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
                        <div id="alertMessage" className="alert alert-danger display" role="alert">
                            Error message    
                        </div>
                        <button type="submit" className="btn btn-primary btn-block d-grid gap-2 col-6 mx-auto mb-3 " onClick={addItem}>Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    
        )
}
    


export default Card;