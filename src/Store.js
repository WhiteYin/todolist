import { createStore, combineReducers } from 'redux';
import { reducer as filterReducer } from './components/filter';
import { reducer as todoReducer } from './components/todos';

const reducer = combineReducers({
    filter: filterReducer,
    todo: todoReducer
});

const store = createStore(reducer, {});

export default store;
