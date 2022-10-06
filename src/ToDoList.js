import React, {useState} from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

const ToDoList = () => {
//function ToDoList() {
    const [toDos, setToDos] = useState([]);

    const addToDo = (toDo) => {
        setToDos(toDos => [...toDos, toDo])
    }

    const removeToDo = (id) => {
        setToDos(toDos => toDos.filter(toDo => toDo.id !== id));
    }

    const toDoComponents = toDos.map(toDo => (
        <ToDo
            id={toDo.id}
            task={toDo.task}
            key={toDo.id}
            removeToDo={removeToDo}
        />
    ));

    return (
        <div>
            <NewToDoForm addToDo={addToDo} />
            <ul>{toDoComponents}</ul>
        </div>
    )
}

export default ToDoList;