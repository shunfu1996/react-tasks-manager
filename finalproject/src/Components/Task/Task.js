/* import  */
import Data from "../Data/Data"

const Task = ({ CardData, deleteTask, submittingStatue }) => { //create the new task by using the input value
    return(
        <div>
            {CardData.map((task) => {
                // const { name, description, assignedTo, dueDate, edit, id} = task;
                const { name, description, assignedTo, dueDate, id} = task;
                return(
                    <Data 
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        assignedTo={assignedTo}
                        dueDate={dueDate}
                        // edit={edit}
                        deleteTask={deleteTask}
                        submittingStatue={submittingStatue}
                    />
                );
            })}
        </div>
    );
}

export default Task