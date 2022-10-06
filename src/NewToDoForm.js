import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const NewToDoForm = ({addToDo}) => {
    const [task, setTask] = useState("");

    const handleChange = e => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({ task, id: uuid() });
        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>To Do List</h1>
            <label htmlFor="task">Task </label>
            <input
                id="task"
                type="text"
                name="task"
                placeholder="Add a new task"
                onChange={handleChange}
                value={task}
            />

            
            <button>Update To Do List!</button>
        </form>
    )
}

export default NewToDoForm;