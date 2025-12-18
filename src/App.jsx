import {TodoCounter} from './components/TodoCounter/TodoCounter.jsx'
import {TodoSearch} from "./components/TodoSearch/TodoSearch.jsx";
import {TodoList} from "./components/TodoList/TodoList.jsx";
import {CreateTodoButton} from "./components/CreateTodoButton/CreateTodoButton.jsx";
import {TodoItem} from "./components/TodoItem/TodoItem.jsx";
import React from "react";
import {EmptyTodos} from "./components/EmptyTodos/EmptyTodos.jsx";
import {TodosError} from "./components/TodosError/TodosError.jsx";
import {TodosLoading} from "./components/TodosLoading/TodosLoading.jsx";

// const defaultTodos = [
//     {text: 'Take one course', completed: true},
//     {text: 'Name cat', completed: false},
//     {text: 'Search some', completed: false},
//     {text: 'Add a new course', completed: true},
// ]
//
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// localStorage.removeItem('TODOS_V1')

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;


                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);

            } catch (e) {
                setError(true);
                setLoading(false);
                console.error(e);
            }
        }, 2000)
    }, []);


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}

function App() {

    // This is REACT STATE. It returns an array with two values:
    // 1) searchValue -> the current value of the state (read-only / immutable)
    // 2) setSearchValue -> The function used to update that state
    // We can also provide an initial state value; in this case, an empty string
    const [searchValue, setSearchValue] = React.useState('');

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

    const deleteTodo = (text) => {
        const newTodos = [...todos]; // copy the state array
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodo(newTodos)
    }

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

                {loading &&
                    (<>
                            <TodosLoading/>
                            <TodosLoading/>
                            <TodosLoading/>
                        </>
                    )
                }

                {error && <TodosError/>}

                {(!loading && searchedTodos.length === 0) && (
                    <EmptyTodos/>
                )}

                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text}
                              text={todo.text}
                              completed={todo.completed}
                              onComplete={() => completeTodo(todo.text)}
                              onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton/>

        </>
    )
}


export {App}
