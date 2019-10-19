import React from 'react'
import {connect} from 'react-redux';

import {removeTodo} from '../actions/TodoActions';

const IncompleteTodoDisplay = ({todos, bgColor, removeTodo}) => {
    let filteredTodos = todos.filter(todo => !todo.completed);
    return (
        <div style={{backgroundColor: bgColor}}>
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
    (state) => ({
        todos: state.TodoReducer.todos,
        bgColor: state.BackgroundReducer.color, 
    }),
    (dispatch) => ({
        removeTodo: id => dispatch(removeTodo(id))
    })
)(IncompleteTodoDisplay);