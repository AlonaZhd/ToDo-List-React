import React, { useState } from "react";
import Button from "../button/button";

import "./add-field.scss";

const AddField = ({ toDos, setToDos }) => {
    const [field, setField] = useState("");

    const onClickHandler = () => {
        const updateToDos = [
            ...toDos,
            { id: toDos.length + 1, todo: field, checkbox: false },
        ];
        setToDos(updateToDos);
        setField("");
    };

    const onKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            onClickHandler();
        }
    };

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setField(value);
    };

    return (
        <div className="todo__field">
            <input
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                value={field}
                className="field"
            ></input>
            <Button click={onClickHandler} />
        </div>
    );
};

export default AddField;
