import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, toggleDoneTask, removeTask }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`tasks__task
          ${task.taskDone ? " tasks__task--done" : ""}
          ${(hideDoneTasks && task.taskDone) ? " tasks__task--hidden" : ""}
          `}
      >

        <button
          onClick={() => toggleDoneTask(task.id)}
          className="tasks__button tasks__button--done">
          {task.taskDone ? "✔" : ""}
        </button>

        <span className={task.taskDone ? "tasks__taskNameDone" : undefined}>
          {task.taskName}
        </span>

        <button
          onClick={() => removeTask(task.id)}
          className="tasks__button tasks__button--remove">🗑</button>

      </li>
    ))}
  </ul>
);

export default Tasks;