import * as ACTIONS from "../actions/TodoActions";

const defaultTodoState = {
    todos: []
}

const TodoReducer = (state=defaultTodoState, action) => {
    let newTodos;
    
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            newTodos = [...state.todos, action.todo];
            return {...state, todos: newTodos};
        case ACTIONS.REMOVE_TODO:
            newTodos = state.todos.filter(todo => todo.ID != action.ID);
            return {...state, todos: newTodos};
        case ACTIONS.TOGGLE_TODO:
            // Find index of todo
            let idx = state.todos.findIndex(todo.ID == action.ID);
            newTodos = [...state.todos];
            newTodos[idx].completed = !newTodos[idx].completed;
            return {...state, todos: newTodos};
    }
}

export default TodoReducer;