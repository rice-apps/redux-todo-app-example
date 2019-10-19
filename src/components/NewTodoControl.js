import React from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../actions/TodoActions';

const NewTodoControl = ({addTodo}) => (
    <div>
        <input style={{display: 'inline-block', padding:8}} type="text" />
        <button style={{display: 'inline-block', padding:8}} onClick={() => addTodo("adlkjfa;dlfkj", "a;ldkfja;df")}>
           Add Task!
        </button>
    </div>
);

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
        addTodo: (description, deadline) => dispatch(addTodo(description, deadline))
    })
)(NewTodoControl);