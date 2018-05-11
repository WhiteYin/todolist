import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store';
import { view as Filter } from './components/filter';
import { view as TodoList } from './components/todos';

import './index.less';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Filter />
            <TodoList />
        </div>
    </Provider>,
    document.getElementById('app')
);
