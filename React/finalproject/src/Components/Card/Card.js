import React from 'react';
import './Card.css';
import { useState } from 'react';


/* xport default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            description: '',
            assignedTo: '',
            dueDate: '',
            status: 'TODO'
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeAssignedTo = this.handleChangeAssignedTo.bind(this);
        this.handleChangeDueDate = this.handleChangeDueDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
        // this.props.addName(e.target.value);
    }
    handleChangeDescription(e) {
        this.setState({description: e.target.value});
        // this.props.addDescription(e.target.value)
    }
    handleChangeAssignedTo(e) {
        this.setState({assignedTo: e.target.value});
        // this.props.addAssignedTo(e.target.value)
    }
    handleChangeDueDate(e) {
        this.setState({dueDate: e.target.value});
        // this.props.addDueDate(e.target.value)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(`test ${this.state.name} ${this.state.description} ${this.state.assignedTo} ${this.state.dueDate} ${this.state.status} ${this.state.id}`);
        this.setState({name: ''});
        this.setState({description: ''});
        this.setState({assignedTo: ''});
        this.setState({dueDate: ''});
        

    } */
    
    /* value={this.state.name} onChange={this.handleChangeName}  67*/
    // value={this.state.dueDate} onChange={this.handleChangeDueDate}
    // value={this.state.assignedTo} onChange={this.handleChangeAssignedTo}
    //value={this.state.description} onChange={this.handleChangeDescription}
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
 
    // render() {
        return(
            <div className="container " id="card">
                <div className="row">
                    <div className="col">
                        <h2>New Task</h2>
                        <form id="newTaskForm" /* onSubmit={handleSubmit} */>
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
    
// }

export default Card;