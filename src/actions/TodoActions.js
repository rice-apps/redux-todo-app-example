import dispatch from 'redux';

export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export const addTodo = (description, deadline) => {
    let id = Math.random().toFixed(0);
    let completed = false;
    let todo = {
        id,
        description,
        deadline,
        completed
    };
    return {
        type: ADD_TODO,
        todo
    };
}

export const removeTodo = (ID) => {
    console.log("Removing!");
    return {
        type: REMOVE_TODO,
        ID
    };
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    };
}