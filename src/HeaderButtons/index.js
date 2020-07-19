import React from "react";
import "./style.css";

const HeaderButtons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <span className="headerButtons">

            <button className="headerButtons__button">
                {hideDoneTasks ? "Show " : "Hide "}done tasks
            </button>

            <button
                disabled={tasks.every(({ taskDone }) => taskDone)}
                className="headerButtons__button">All tasks done!
             </button>

        </span>
    )
);

export default HeaderButtons;