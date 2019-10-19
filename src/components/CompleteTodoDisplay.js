import React from 'react'
import {connect} from 'react-redux';

const CompleteTodoDisplay = ({todos, bgColor}) => {
    let filteredTodos = todos.filter(todo => todo.completed);
    return (
        <div style={{backgroundColor: bgColor}}>
            <h1>Complete Todos</h1>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.ID}>{todo.description}</li>
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
    })
)(CompleteTodoDisplay);