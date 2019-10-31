export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let id = 0;

export const addTodo = item => ({ type: ADD_TODO, id: id++, item: item });
export const removeTodo = item => ({ type: REMOVE_TODO, item: item });
export const updateTodo = item => ({ type: UPDATE_TODO, item: item });
export const toggleTodo = item => ({ type: TOGGLE_TODO, item: item });