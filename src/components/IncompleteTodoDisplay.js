import React from 'react'
import {connect} from 'react-redux';

import {toggleTodo} from '../actions/TodoActions';

<<<<<<< HEAD
const IncompleteTodoDisplay = ({todos, bgColor, removeTodo}) => {
    let filteredTodos = todos.filter(todo => !todo.completed);
=======
const IncompleteTodoDisplay = ({todos, toggleTodo}) => {
    let filteredTodos = todos.filter(todo => todo.completed == false);
>>>>>>> c0a39d17740f471de86c62ced8ac13b6f25217f3
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
        removeTodo: id => dispatch(removeTodo(id))
    })
)(IncompleteTodoDisplay);