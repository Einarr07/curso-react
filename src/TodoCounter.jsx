// "Props" are values passed from a parent component to a child component.
// Here, the component receives two props: total and completed.
// These props allow the component to display dynamic information.

function TodoCounter({total, completed}) {
    return (
        <h1>
            You have completed {completed} out off {total} pending task
        </h1>
    );
}

export {TodoCounter};
