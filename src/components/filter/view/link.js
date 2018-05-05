import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

// 筛选标签
const Link = ({ active, children, setFilter }) => {
    return (
        // 根据active的布尔值选择样式
        <span
            className={'filter-tab ' + (active ? 'filter-active' : '')}
            onClick={setFilter}
        >
            {children}
        </span>
    );
};

Link.propTypes = {
    // active必须是bool值
    active: PropTypes.bool.isRequired,
    // children是调用组件时传入的子节点，所以必须是node类型
    children: PropTypes.node.isRequired,
    setFilter: PropTypes.func.isRequired
};

/**
 * state: 全局store
 * props: 容器组件的props
 * return: 展示组件的props
 */
const mapStateToProps = (state, containerPorps) => {
    return {
        active: state.filter === containerPorps.filter
    };
};

const mapDispatchToProps = (dispach, containerProps) => {
    return {
        setFilter: () => {
            dispach(actions.setFilter(containerProps.filter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
