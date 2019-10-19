import React from 'react'
import {connect} from 'react-redux';

import {toggleTodo} from '../actions/TodoActions';

const IncompleteTodoDisplay = ({todos, toggleTodo}) => {
    let filteredTodos = todos.filter(todo => todo.completed == false);
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <ul>
                {filteredTodos.map(todo => (
                    <li 
                    key={todo.ID}
                    onClick={() => toggleTodo(todo.ID)}
                    >
                    {todo.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default connect(
    (state) => {
        return {
            todos: state.TodoReducer.todos
        }
    },
    (dispatch) => {
        return {
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
)(IncompleteTodoDisplay);