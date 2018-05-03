import { SET_FILTER } from './actionTypes';

// 设置Filter的筛选条件
export const setFilter = filterType => ({
    type: SET_FILTER,
    filter: filterType
});
