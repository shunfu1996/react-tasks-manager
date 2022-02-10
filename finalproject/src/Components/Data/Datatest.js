function submitEdits(id) {  // edit function map 左之前的 array
    submittingStatue.current = true;
    const updatedTodos = [...filterTask].map((todo) => {
      if (todo.id === id) {
        todo.name = editName;
        todo.description = editDescription;
        todo.type = editType;
        todo.dueDate = editDate;
      }
      return todo;
    });
    deleteTask(updatedTodos);
    // setTodoEditing(null);
    setEditing(!editing)
    console.log(editing);
  }

  function clickEdit() { 
    setEditing(!editing) // click edit 時反轉
  }

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
                },
                ...prevData,
            ];
        })
            setDueDate("");
            setType("");
            setDescription("");
            setName("");
    }
  }




module.exports = submitEdits, clickEdit, addItem