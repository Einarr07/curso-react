// Here we use "props" as an object that contains all properties sent to the component.
// props.completed and props.text come from the parent component.
// A prop can be any type of value: number, string, boolean, function, etc.

function TodoItem(props) {
    return (
        <li>
            <span>V {props.completed}</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export {TodoItem};
