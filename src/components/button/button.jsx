import React from "react";

import "./button.scss";

const Button = ({ click }) => {
    return (
        <button className="button" onClick={click}>
            ADD
        </button>
    );
};

export default Button;
