import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
  <ul className="section__body">
    {tasks.map(task => (
      <li
        className={`taskList__task
          ${task.taskDone ? " taskList__task--done" : ""}
          ${(hideDoneTasks && task.taskDone) ? " taskList__task--hidden" : ""}"
          `}
      >
<button className="taskDone listButton listButton--done">
            {task.taskDone ? "✔" : ""}
            </button>

            
            <span className={task.taskDone ? "taskList__taskNameDone" : false}>
            {task.taskName}
            </span>
            
            <button className="listButton listButton--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;