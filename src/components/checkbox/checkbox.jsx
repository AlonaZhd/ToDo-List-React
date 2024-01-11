import React from "react";

import "./checkbox.scss";

const Checkbox = ({ isChecked, id, handleCheckboxChange }) => {
    return (
        <>
            <input
                onChange={handleCheckboxChange}
                checked={isChecked}
                type="checkbox"
                name="checkbox"
                id={`checkbox-${id}`}
                className="checkbox-input"
            ></input>
            <span
                className={`checkbox-icon ${
                    isChecked ? "checkbox-icon--done" : ""
                }`}
            ></span>
        </>
    );
};

export default Checkbox;
