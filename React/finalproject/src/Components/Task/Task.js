/* import  */
import Date from "../Date/Date"

const Task = ({ taskDate, deleteTask }) => {
    return(
        <div>
            { 
                taskDate.map((task) => {
                    const { name, description, assignedTo, dueDate, id } = task;
                    return <Date 
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