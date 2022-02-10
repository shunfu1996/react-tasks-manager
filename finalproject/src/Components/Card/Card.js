import React from 'react';
import './Card.css';
import { useState } from 'react';
import { v4 } from 'uuid';
// import './test';

//create a new card
const Card = ({ add, submittingStatue, status}) => {
    // change the input value
    const [name, setName] = useState("")  
    function nameChange(e) {
        setName(e.target.value)
    }
    const [description, setDescription] = useState("")
    function descriptionChange(e) {
        setDescription(e.target.value)
        console.log(e.target.value)
    }
    const [type, setType] = useState("")
    function typeChange(e) {
        setType(e.target.value)
        console.log(e.target.value)
        if(e.target.value === "School"){
            setBackgroundColor("#FB966E")
        } else if(e.target.value === "Home"){
            setBackgroundColor("#B5CAA0")
        } else if(e.target.value === "Work"){
            setBackgroundColor("#EB7A77")
        }
    }
    const [dueDate, setDueDate] = useState("")
    function dueDateChange(e) {
        setDueDate(e.target.value)
    }
    const [BackGroundColor, setBackgroundColor] = useState("")
    
    function addItem(e) {
        const errorMessage = document.querySelector('#error');
        e.preventDefault(); // to prevent the web F5
        if(!validInput(name)){
            errorMessage.innerHTML = "Please enter the name!"; //check the input is correct
            errorMessage.style.display = "block";
        } else if(!validInput(description)){
            errorMessage.innerHTML = "Please enter the description!";
            errorMessage.style.display = "block";
        }  else if(!validInput(type)){
            errorMessage.innerHTML = "Please choose a type!";
            errorMessage.style.display = "block";
            console.log(type)
        }  else if(!validInput(dueDate)){
            errorMessage.innerHTML = "Please choose a date!";
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
                        type,
                        dueDate,
                        BackGroundColor,
                        status,
                    },
                    ...prevData,
                ];
            })    
                setDueDate("");
                setType("");
                setDescription("");
                setName("");
                setBackgroundColor("");
        }    

         
    }
    function validInput (data) {
        return data !== null && data !== ''; // the input cannot empty 
    }

    // function changeColor() {
    //     document.getElementById('background').style.background = "red";
    //     // document.body.style.background = color;
    // }

    // let colors = [
    //     {
    //         value:1,
    //         label:"red"
    //     },
    //     {
    //         value:1,
    //         label:"blue"
    //     }
    // ]

    // const [background, setBackground] = useState(colors.label);
    // const setBackground = e => {
    //         setBackground(e.label);
    //     }
    
  
//     const changeStyle = () => {
//     console.log("you just clicked");
  
//     setStyle("cont2");
//   };

    return(
        <div className="cardShape" style={{backgroundColor: BackGroundColor}} >
            <div className="row" id="card">
                <div className="col form">
                    <h2>Edit New Task</h2>
                    <form id="newTaskForm">
                        <label htmlFor="newTaskName" >Task Name</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Your task" aria-label="Username" aria-describedby="basic-addon1"  id="newTaskName"  value={name} onChange={nameChange} />
                        </div>
                        <label htmlFor="newTaskDescription">Description</label>
                        <div className="input-group mb-3">
                            <textarea className="form-control" aria-label="With textarea" id="newTaskDescription" placeholder="How to do the task" value={description} onChange={descriptionChange} ></textarea>
                        </div>
                        
                        <div className="row">
                            <div className="form-group col mb-3">
                                <label htmlFor="newTaskAssigned">Type Of</label>
                                    <select className="form-select" aria-describedby="inputGroup-sizing-sm" id="newTaskAssignedTo" value={type} onChange={typeChange} >
                                        <option>Choose a type of task</option>
                                        <option>Home</option>
                                        <option>School</option>
                                        <option>Work</option>
                                    </select>
                            </div>
                            <div className="form-group col mb-3">
                                <label htmlFor="newTaskDueDate">Due Date</label>
                                <input type="date" className="form-control" id="newTaskDueDate" value={dueDate} onChange={dueDateChange} />
                            </div>
                        </div>
                        <div id="error" className="alert alert-danger warning" role="alert">
                        A simple warning alert—check it out!
                        </div>
                        <button type="submit" className="button btn btn-block d-grid gap-2 col-6 mx-auto mb-3" onClick={addItem}>Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    
        )
}
    


export default Card;