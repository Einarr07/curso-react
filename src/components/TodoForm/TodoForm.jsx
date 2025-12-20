import React from "react";
import './TodoForm.css'
import {TodoContext} from "../../context/TodoContext.jsx";

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea
                placeholder='Do homeworks'
                value={newTodoValue}
                onChange={onChange}
            />

            <div className='TodoForm-buttonContainer'>
                <button
                    className='TodoForm-button TodoForm-button--cancel'
                    type='button'
                    onClick={onCancel}

                >
                    Cancel
                </button>
                <button
                    className='TodoForm-button TodoForm-button--add'
                    type='submit'
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export {TodoForm}