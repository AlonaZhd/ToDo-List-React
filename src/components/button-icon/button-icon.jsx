import React from "react";

import "./button-icon.scss";

const ButtonIcon = ({ onClick, text, className }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`button-icon button-icon--${className}`}
        >
            {text}
        </button>
    );
};

export default ButtonIcon;
