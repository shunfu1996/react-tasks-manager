/* import  */
import Data from "../Data/Data"

const Task = ({ filterTask, deleteTask, submittingStatue, setFilterTask, submitEdit, CardData, isFilter}) => { //create the new task by using the input value
    return(
        <div>
            { isFilter && filterTask.map((task) => {
                // const { name, description, assignedTo, dueDate, edit, id} = task;
                const { name, dueDate, type, description, id} = task;
                return(
                    <Data 
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        type={type}
                        dueDate={dueDate}
                        // editTask={editTask}
                        deleteTask={deleteTask}
                        submittingStatue={submittingStatue}
                        setFilterTask={setFilterTask}
                        filterTask={filterTask}
                        submitEdit={submitEdit}
                    />
                );
            })}
            { !isFilter && CardData.map((task) => {
                const { name, dueDate, type, description, id} = task;
                return(
                    <Data 
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        type={type}
                        dueDate={dueDate}
                        // editTask={editTask}
                        deleteTask={deleteTask}
                        submittingStatue={submittingStatue}
                        setFilterTask={setFilterTask}
                        filterTask={filterTask}
                        submitEdit={submitEdit}
                    />
                );
            })}
        </div>
    );
}

export default Task