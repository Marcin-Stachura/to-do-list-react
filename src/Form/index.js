import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskName, setNewTaskName] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskName.trim());
        setNewTaskName("");
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <input
                value={newTaskName}
                onChange={({ target }) => setNewTaskName(target.value)}
                className="form__input"
                autoFocus
                placeholder="New task name..." />
            <button className="form__button">Add task</button>
        </form>
    )
};

export default Form;