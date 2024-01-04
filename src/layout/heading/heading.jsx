import React from "react";
import logo from "./react-icon.svg";

import "./heading.scss";

const Heading = () => {
    return (
        <div className="heading">
            <h1 className="heading__title">
                Build <br></br>
                <span className="text--accent">To-Do</span> List
            </h1>
            <div className="heading__wrapp">
                <h2 className="heading__subtitle">with</h2>{" "}
                <span className="text--accent">React</span>
                <img src={logo} alt="React Logo" className="heading__logo" />
            </div>
        </div>
    );
};

export default Heading;
