const newtask =new TaskManager(0)
// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    
    

    // Select the inputs
    const newTaskName = document.querySelector('#newTaskName');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const errorMessage = document.querySelector('#alertMessage');
    
    
    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newTaskName.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    newtask.addTask(name, description, assignedTo, dueDate);
    console.log(newtask.tasks);
    if(!validFormFieldInput(name)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

});

function validFormFieldInput(data){
    return data !== null && data !== '';
}

