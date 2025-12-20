import {TodoCounter} from './components/TodoCounter/TodoCounter.jsx'
import {TodoSearch} from "./components/TodoSearch/TodoSearch.jsx";
import {TodoList} from "./components/TodoList/TodoList.jsx";
import {CreateTodoButton} from "./components/CreateTodoButton/CreateTodoButton.jsx";
import {TodoItem} from "./components/TodoItem/TodoItem.jsx";
import React from "react";
import {EmptyTodos} from "./components/EmptyTodos/EmptyTodos.jsx";
import {TodosError} from "./components/TodosError/TodosError.jsx";
import {TodosLoading} from "./components/TodosLoading/TodosLoading.jsx";
import {TodoContext} from "./context/TodoContext.jsx";
import {Modal} from "./components/Modal/Modal.jsx";
import {TodoForm} from "./components/TodoForm/TodoForm.jsx";

function App() {
    const {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos}/>
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>

                {/*We can use too something how this
                                <TodoItem/>
                            */}

                {loading && (
                    <>
                        <TodosLoading/>
                        <TodosLoading/>
                        <TodosLoading/>
                    </>
                )}

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

            <CreateTodoButton setOpenModal={setOpenModal}/>

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </>
    )
}


export {App}
