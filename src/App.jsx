import './App.css'
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from "./TodoSearch.jsx";
import {TodoList} from "./TodoList.jsx";
import {CreateTodoButton} from "./CreateTodoButton.jsx";
import {TodoItem} from "./TodoItem.jsx";

function App() {

    return (
        <>
            <div className="App">

                <TodoCounter/>
                <TodoSearch/>
                <TodoList>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                </TodoList>

                <CreateTodoButton/>
            </div>

        </>
    )
}


export {App}
