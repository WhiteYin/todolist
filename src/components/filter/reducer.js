import { SET_FILTER } from './actionTypes';
import * as filterType from '../../filterType';

// 这里的state实际上是全局store上的filter属性
const reducer = (state = filterType.ALL, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default reducer;
