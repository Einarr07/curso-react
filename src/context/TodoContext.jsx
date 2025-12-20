import React from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage.jsx";

const TodoContext = React.createContext();


function TodoProvider({children}) {
    // This is REACT STATE. It returns an array with two values:
    // 1) searchValue -> the current value of the state (read-only / immutable)
    // 2) setSearchValue -> The function used to update that state
    // We can also provide an initial state value; in this case, an empty string
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const {
        item: todos,
        saveItem: saveTodo,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    // Derived State
    const completedTodos = todos.filter(todos => todos.completed === true).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todos) => {
            const todoText = todos.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText);
        }
    )


    const completeTodo = (text) => {
        const newTodos = [...todos]; // copy the state array
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodo(newTodos)
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push(
            {
                text,
                completed: false,
            }
        );
        saveTodo(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]; // copy the state array
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodo(newTodos)
    }


    return (
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            completedTodos,
            totalTodos,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}


// const defaultTodos = [
//     {text: 'Take one course', completed: true},
//     {text: 'Name cat', completed: false},
//     {text: 'Search some', completed: false},
//     {text: 'Add a new course', completed: true},
// ]
//
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// localStorage.removeItem('TODOS_V1')