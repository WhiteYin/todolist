import * as actionTypes from './actionTypes';

export const addTodos = (todoText) => ({
    type: actionTypes.ADD,
    text: todoText
});

export const toggleTodos = (index) => ({
    type: actionTypes.TOGGLE,
    index: index
});

export const deleteTodos = (index) => ({
    type: actionTypes.DELETE,
    index: index
});
