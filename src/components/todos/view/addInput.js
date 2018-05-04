import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addTodos } from '../actions';
import { connect } from 'react-redux';

class AddInput extends Component {
    constructor(props) {
        super(props);

        this.add = this.add.bind(this);
        this.inputRef = React.createRef();
    }

    add() {
        const todoText = this.inputRef.current.value;
        this.props.addTodo(todoText);
        this.inputRef.current.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="请输入待办事项" ref={ this.inputRef }/>
                <button onClick={ this.add }>新增</button>
            </div>
        );
    }
}

AddInput.propTypes = {
    addTodo: PropTypes.func.isRequired
};

const mapDispachToProps = (dispach) => ({
    addTodo: (text) => {
        dispach(addTodos(text));
    }
});

export default connect(null, mapDispachToProps)(AddInput);
