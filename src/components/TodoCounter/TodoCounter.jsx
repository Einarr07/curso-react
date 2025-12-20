// "Props" are values passed from a parent component to a child component.
// Here, the component receives two props: total and completed.
// These props allow the component to display dynamic information.
import './TodoCounter.css';
import React from "react";

function TodoCounter({total, completed}) {

    if (total !== completed) {
        return (
            <h1 className="TodoCounter">
                You have completed <span>{completed}</span>
                out off <span>{total}</span> pending task
            </h1>
        )
    } else if (total === 0) {
        return (
            <h1 className="TodoCounter">
                Don't exist any TODO
            </h1>
        )
    } else {
        return (
            <h1 className="TodoCounter">
                You are complete all TODOs, congratulations 🥳
            </h1>
        )
    }
}

export {TodoCounter};
