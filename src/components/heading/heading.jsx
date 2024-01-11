import React from "react";
import AddField from "../add-field/add-field";

import "./heading.scss";
import SelectOption from "../select-option/select-option";

const ToDoHeading = ({ toDos, setToDos, filter }) => {
    return (
        <div className="todo__heading">
            <AddField toDos={toDos} setToDos={setToDos} />
            <SelectOption
                toDos={toDos}
                setToDos={setToDos}
                filter={filter}
            ></SelectOption>
        </div>
    );
};

export default ToDoHeading;
