import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        className={`tasks__task
          ${task.taskDone ? " tasks__task--done" : ""}
          ${(hideDoneTasks && task.taskDone) ? " tasks__task--hidden" : ""}
          `}
      >

        <button className="tasks__button tasks__button--done">
          {task.taskDone ? "✔" : ""}
        </button>

        <span className={task.taskDone ? "tasks__taskNameDone" : undefined}>
          {task.taskName}
        </span>

        <button className="tasks__button tasks__button--remove">🗑</button>

      </li>
    ))}
  </ul>
);

export default Tasks;