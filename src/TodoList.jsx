// "children" is a special prop that React automatically provides.
// It represents the elements found between the opening and closing tags
// of the component when it is used.
//
// Example:
// <TodoList>
//     <TodoItem />
//     <TodoItem />
// </TodoList>
//
// Everything inside <TodoList> ... </TodoList> is passed as "children".

function TodoList({children}) {
    return (
        <ul>
            {children}
        </ul>
    );
}

export {TodoList};
