import React from "react";
import ToDoItem from "../todo-item/todo-item";

import "./todo-list.scss";

const ToDoList = ({ toDos, setToDos }) => {
    return (
        <ul className="todo__list">
            {toDos.map((element, item) => {
                return (
                    <ToDoItem
                        key={item}
                        element={element}
                        item={item}
                        toDos={toDos}
                        setToDos={setToDos}
                    />
                );
            })}
        </ul>
    );
};

export default ToDoList;
