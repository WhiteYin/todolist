import * as actionTypes from './actionTypes';

let index = 0;
const initState = [];

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return [
                ...state,
                {
                    index: ++index,
                    text: action.text,
                    state: false
                }
            ];
        case actionTypes.DELETE:
            return state.filter((item) => {
                return item.index !== action.index;
            });
        case actionTypes.TOGGLE:
            return state.map((item) => {
                if (item.index === action.index) {
                    return {
                        ...item,
                        state: !item.state
                    };
                }
                else {
                    return item;
                }
            });
        default:
            return state;
    }
};


