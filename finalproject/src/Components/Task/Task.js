/* import  */
import Data from "../Data/Data"

const Task = ({ filterTask, deleteTask, submittingStatue, setFilterTask, CardData, isFilter}) => { //create the new task by using the input value
    return(
        <div>
            { isFilter && filterTask.map((task) => {
                // const { name, description, assignedTo, dueDate, edit, id} = task;
                const { name, dueDate, type, description, id, BackGroundColor, status} = task;
                return(
                    <Data 
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        type={type}
                        dueDate={dueDate}
                        deleteTask={deleteTask}
                        submittingStatue={submittingStatue}
                        setFilterTask={setFilterTask}
                        BackGroundColor={BackGroundColor}
                        status={status}
                        CardData={CardData}
                    />
                );
            })}
            { !isFilter && CardData.map((task) => {
                const { name, dueDate, type, description, id, BackGroundColor, status} = task;
                return(
                    <Data 
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        type={type}
                        dueDate={dueDate}
                        deleteTask={deleteTask}
                        submittingStatue={submittingStatue}
                        setFilterTask={setFilterTask}
                        BackGroundColor={BackGroundColor}
                        status={status}
                        CardData={CardData}
                    />
                );
            })}
        </div>
    );
}

export default Task