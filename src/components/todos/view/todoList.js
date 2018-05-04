import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';
import AddInput from './addInput';
import { connect } from 'react-redux';
import * as todoTypes from '../../../filterType';

const TodoList = ({ list }) => {
    return (
        <div>
            <AddInput />
            <ul>
                {
                    list.map((item) => {
                        return (
                            <TodoItem key={item.index} index={item.index} text={item.text} state={item.state} />
                        );
                    })
                }
            </ul>
        </div>
    );
};

TodoList.propTypes = {
    list: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const list = state.todo.filter((item) => {
        switch (state.filter) {
            case todoTypes.ALL:
                return true;
            case todoTypes.COMPLETED:
                return item.state;
            case todoTypes.UNCOMPLETE:
                return !item.state;
            default:
                return true;
        }
    });

    return {
        list: list
    };
}

export default connect(mapStateToProps)(TodoList);
