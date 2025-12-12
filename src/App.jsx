import {TodoCounter} from './TodoCounter'
import {TodoSearch} from "./TodoSearch.jsx";
import {TodoList} from "./TodoList.jsx";
import {CreateTodoButton} from "./CreateTodoButton.jsx";
import {TodoItem} from "./TodoItem.jsx";
import React from "react";

const defaultTodos = [
    {text: 'Take one course', completed: true},
    {text: 'Name cat', completed: false},
    {text: 'Search some', completed: false},
    {text: 'Add a new course', completed: true},
]

function App() {
    // This is REACT STATE. It returns an array with two values:
    // 1) searchValue -> the current value of the state (read-only / immutable)
    // 2) setSearchValue -> The function used to update that state
    // We can also provide an initial state value; in this case, an empty string
    const [searchValue, setSearchValue] = React.useState('');

    const [todos, setTodos] = React.useState(defaultTodos);

    const completedTodos = todos.filter(state => state.completed === true).length;
    const totalTodos = todos.length;

    console.log(`The user search is ${searchValue}`)

    return (
        <>

            <TodoCounter completed={completedTodos} total={totalTodos}/>
            <TodoSearch
                sarchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>

                {/*We can use too something how this
                <TodoItem/>

                */}
                {defaultTodos.map(todo => (
                    <TodoItem key={todo.text}
                              text={todo.text}
                              completed={todo.completed}
                    />
                ))}
            </TodoList>

            <CreateTodoButton/>


        </>
    )
}


export {App}
