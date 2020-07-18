import React from "react";
import "./style.css";

const Form = () => (
    <form className="section__body form">
        <input className="form__input" autoFocus placeholder="New task name..." />
        <button className="form__button">Add task</button>
    </form>
);

export default Form;