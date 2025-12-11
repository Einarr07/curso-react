import './App.css'
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from "./TodoSearch.jsx";
import {TodoList} from "./TodoList.jsx";
import {CreateTodoButton} from "./CreateTodoButton.jsx";
import {TodoItem} from "./TodoItem.jsx";
import React from "react";

const defaultTodos = [
    {text: 'Take one course', completed: false},
    {text: 'Name cat', completed: false},
    {text: 'Search some', completed: false},
]

function App() {

    return (
        <React.Fragment>

            <TodoCounter completed={15} total={20}/>
            <TodoSearch/>
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


        </React.Fragment>
    )
}


export {App}
