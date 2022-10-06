import React from "react";

const ToDo = ({task, removeToDo, id}) => {

    const handleRemove = () => removeToDo(id);
    return (
        <li>
            <b>{task}</b>
            <button onClick={handleRemove}>X</button>
        </li>
    )
}

export default ToDo;