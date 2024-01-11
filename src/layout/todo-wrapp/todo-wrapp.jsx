import { useEffect, useState } from "react";
import ToDoList from "../../components/todo-list/todo-list";
import ToDoHeading from "../../components/heading/heading";

import "./todo-wrapp.scss";

const ToDoWrapp = () => {
    const toDosData = [
        { id: 1, todo: "firstTodo", checkbox: false },
        { id: 2, todo: "secondTodo", checkbox: false },
        { id: 3, todo: "thirdTodo", checkbox: false },
        { id: 4, todo: "fourthTodo", checkbox: false },
    ];

    const [toDos, setToDos] = useState(toDosData);
    const [filteredToDos, setFilteredToDos] = useState(toDos);

    // console.log(filteredToDos);

    useEffect(() => {
        // Оновлюємо фільтровані завдання при зміні toDos
        setFilteredToDos(toDos);
    }, [toDos]);

    const handleFilter = (isChecked) => {
        // Фільтруємо завдання відповідно до вибраного значення чекбоксу
        if (isChecked === null) {
            setFilteredToDos(toDos); // Для "All" показуємо всі завдання
        } else {
            const filteredTasks = toDos.filter(
                (task) => task.checkbox === isChecked
            );
            // console.log(filteredTasks);
            setFilteredToDos(filteredTasks);
        }
    };

    return (
        <div className="todo__wrapp">
            <h3 className="todo__title">ToDo List</h3>
            <ToDoHeading
                toDos={toDos}
                setToDos={setToDos}
                filter={handleFilter}
            ></ToDoHeading>
            <ToDoList toDos={filteredToDos} setToDos={setToDos} />
            <i>amount of tasks: {toDos.length}</i>
        </div>
    );
};

export default ToDoWrapp;
