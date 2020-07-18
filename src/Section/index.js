import React from "react";
import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (

    <section className="section">
        <h2 className="section__header"> <span>{title}</span>
            {extraHeaderContent}
        </h2>
        {body}
    </section>
);

export default Section;