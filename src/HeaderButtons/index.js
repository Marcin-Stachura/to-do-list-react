import React from "react";
import "./style.css";

const HeaderButtons = ({ tasks, hideDoneTasks }) => {
    if (tasks.length === 0) {
        return null;
    };

    let alldone = true;
    for (const task of tasks) {
        if (!task.taskDone)
            alldone = false;
    };

    return (
        <span className="headerButtons">

            <button className="headerButtons__button">
                {hideDoneTasks ? "Show " : "Hide "}done tasks
            </button>

            <button
                disabled={alldone}
                className="headerButtons__button">All tasks done!
             </button>

        </span>
    )
};

export default HeaderButtons;