import { ADD_TODO } from "../actions/action.type";

const initialState = [];

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        default:
            return state;
    };
};