import React from 'react';
import './Card.css';

export default class Card extends React.Component {
    render() {
        return(
            <div className="container">
            <div className="row">
                <div className="col">
                    <h2>New Task</h2>
                    <form id="newTaskForm">
                        <p>Name</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  id="newTaskName" />
                        </div>
    
                        <p>Description</p>
                        <div className="input-group mb-3">
                            <textarea className="form-control" aria-label="With textarea" id="newTaskDescription"></textarea>
                        </div>
                        
                        <div className="row">
                            
                            <div className="form-group col mb-3">
                                <label for="newTaskDueDate">Assigned To</label>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="newTaskAssignedTo" />
                            </div>
                            <div className="form-group col mb-3">
                                <label for="newTaskDueDate">Due Date</label>
                                <input type="date" className="form-control" id="newTaskDueDate" />
                            </div>
                        </div>
                        <div id="alertMessage" className="alert alert-danger display" role="alert">
                            Error message    
                    </div>
                    <button type="submit" className="btn btn-primary btn-block d-grid gap-2 col-6 mx-auto mb-3">Add Task</button>
                </form>
                </div>
            </div>
        </div>
        
    )}
    
}