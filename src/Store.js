import { createStore, combineReducers } from 'redux';
import * as filterType from './filterType';
import filterReducer from './components/filter/reducer';

const reducer = combineReducers({
    filter: filterReducer
});

const store = createStore(reducer, {});

export default store;
