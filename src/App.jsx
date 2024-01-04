import ToDoWrapp from "./layout/todo-wrapp/todo-wrapp";
import Heading from "./layout/heading/heading";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <div className="App__section">
                <ToDoWrapp />
                <Heading />
            </div>
        </div>
    );
}

export default App;
