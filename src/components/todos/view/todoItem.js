import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';

const TodoItem = ({ text, state, deleteTodo, toggleTodo }) => {
    return (
        <li>
            <span onClick={toggleTodo} style={state ? { textDecoration: 'line-through' } : {}}>{text}</span>
            <button onClick={deleteTodo} >删除</button>
        </li>
    );
};

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    state: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
    return {
        text: props.text,
        state: props.state
    };
};

const mapDispatchToProps = (dispach, props) => {
    return {
        deleteTodo: () => {
            dispach(actions.deleteTodos(props.index));
        },
        toggleTodo: () => {
            dispach(actions.toggleTodos(props.index));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
