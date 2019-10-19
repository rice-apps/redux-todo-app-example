import React from 'react'
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/TodoActions';

const IncompleteTodoDisplay = ({todos, bgColor, toggleTodo}) => {
    let filteredTodos = todos.filter(todo => !todo.completed);
    return (
        <div style={{backgroundColor: bgColor}}>
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
    (state) => ({
        todos: state.TodoReducer.todos,
        bgColor: state.BackgroundReducer.color, 
    }),
    (dispatch) => ({
        toggleTodo: id => dispatch(toggleTodo(id))
    })
)(IncompleteTodoDisplay);