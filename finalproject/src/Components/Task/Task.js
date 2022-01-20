/* import  */
import Data from "../Data/Data"

const Task = ({ taskDate, deleteTask }) => { //create the new task by using the input value
    return(
        <div>
            { 
                taskDate.map((task) => {
                    const { name, description, assignedTo, dueDate, id} = task;
                    return <Data 
                               key={id}
                               id={id}
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