import React from "react";
import Checkbox from "../checkbox/checkbox";

import "./todo-item.scss";

const ToDoItem = ({ element, toDos, setToDos }) => {
    const handleCheckboxChange = () => {
        const updatedToDos = toDos.map((todo) =>
            todo.id === element.id
                ? { ...todo, checkbox: !todo.checkbox }
                : todo
        );
        setToDos(updatedToDos);
    };

    return (
        <li className="todo__item">
            <div className="todo__task">
                <Checkbox
                    isChecked={element.checkbox}
                    id={element.id}
                    handleCheckboxChange={handleCheckboxChange}
                ></Checkbox>
                <label
                    className={`todo__text ${
                        element.checkbox ? "todo__text--done" : ""
                    }`}
                    htmlFor={`checkbox-${element.id}`}
                >
                    {element.todo}
                    {/* {console.log(element.checkbox)} */}
                </label>
            </div>
        </li>
    );
};

export default ToDoItem;
