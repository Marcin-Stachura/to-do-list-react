import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__header">
            <span className="section__header--title">{title}</span>
            {extraHeaderContent}
        </div>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;