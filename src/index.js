import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store';
import { view as Filter } from './components/filter';

ReactDOM.render(
    <Provider store={store}>
        <Filter />
    </Provider>,
    document.getElementById('app')
);
