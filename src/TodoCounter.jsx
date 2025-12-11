// "Props" are values passed from a parent component to a child component.
// Here, the component receives two props: total and completed.
// These props allow the component to display dynamic information.
import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
        <h1 className="TodoCounter">
            You have completed <span>{completed}</span>
            out off <span>{total}</span> pending task
        </h1>
    );
}

export {TodoCounter};
