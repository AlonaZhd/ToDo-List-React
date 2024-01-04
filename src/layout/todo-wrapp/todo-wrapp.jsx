import "./todo-wrapp.scss";

const ToDoWrapp = () => {
    return (
        <div className="todo__wrapp">
            <h3 className="todo__title">ToDo List</h3>
            <div className="todo__input">
                <input></input>
            </div>
            <ul className="todo__list">
                <div className="todo__item">todo__item</div>
                <div className="todo__item">todo__item</div>
                <div className="todo__item">todo__item</div>
            </ul>
        </div>
    );
};

export default ToDoWrapp;
