import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.length === 0) {
        return null;
    };


    let alldone = true;
    for (const task of tasks) {
        if (!task.taskDone)
            alldone = false;
    };

    return (
        <span className="taskListButtonRow">

            <button className="taskListButtonRow__button">
                {hideDoneTasks ? "Show " : "Hide "}done tasks
            </button>

            <button
                disabled={alldone}
                className="taskListButtonRow__button">All tasks done!
             </button>

        </span>
    )
};

export default Buttons;