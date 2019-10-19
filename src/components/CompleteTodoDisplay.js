import React from 'react'
import {connect} from 'react-redux';

const CompleteTodoDisplay = ({todos}) => {
    let filteredTodos = todos.filter(todo => todo.completed == true);
    return (
        <div>
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
    (state) => {
        return {
            todos: state.TodoReducer.todos
        }
    },
    (dispatch) => {
        return {};
    }
)(CompleteTodoDisplay);