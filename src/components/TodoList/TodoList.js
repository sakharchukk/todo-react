import React from "react";

import TodoListItem from "../TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) =>{

    const element =  todos.map((item) =>{

        const {id, ...itemProps} = item;
        return(
            <li className="list-group-item" key={id}>
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                    onToggleDone = {() => onToggleDone(id)}
            /></li>
        );
    });
    return(
        <ul className="list-group todo-list">
            {element}
        </ul>
    );
};

export default TodoList;