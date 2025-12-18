import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button
            className="CreateTodoButton"
            onClick={(event) => {
                console.log(event)
                console.log('You clicked he button')
                console.log(event.target)
            }}
        >
            +</button>
    )
}

export {CreateTodoButton}