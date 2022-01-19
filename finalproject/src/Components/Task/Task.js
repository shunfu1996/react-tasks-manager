/* import  */
import Date from "../Date/Date"

const Task = ({ taskDate, deleteTask }) => { //create the new task by using the input value
    return(
        <div>
            { 
                taskDate.map((task) => {
                    const { name, description, assignedTo, dueDate, id, status} = task;
                    return <Date 
                               key={id}
                               id={id}
                               status={status}
                               name={name}
                               description={description}
                               assignedTo={assignedTo}
                               dueDate={dueDate}
                               deleteTask={deleteTask}
                            />
                })
            }
        </div>
    )
}

export default Task