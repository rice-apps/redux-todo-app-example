import React from 'react'
import {connect} from 'react-redux';

import {removeTodo} from '../actions/TodoActions';

const IncompleteTodoDisplay = ({todos, removeTodo}) => {
    let filteredTodos = todos.filter(todo => todo.completed == false);
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <ul>
                {filteredTodos.map(todo => (
                    <li 
                    key={todo.ID}
                    onClick={() => removeTodo(todo.ID)}
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
            removeTodo: id => dispatch(removeTodo(id))
        };
    }
)(IncompleteTodoDisplay);