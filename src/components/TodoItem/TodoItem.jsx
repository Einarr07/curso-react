// Here we use "props" as an object that contains all properties sent to the component.
// props.completed and props.text come from the parent component.
// A prop can be any type of value: number, string, boolean, function, etc.

import './TodoItem.css'
import {FaCheck} from 'react-icons/fa6'
import {MdDeleteForever} from "react-icons/md";

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                  onClick={props.onComplete}
            >
                <FaCheck/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className='Icon Icon-delete'
                  onClick={props.onDelete}
            >
                <MdDeleteForever/>
            </span>
        </li>
    );
}

export {TodoItem};
