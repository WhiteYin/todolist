import * as actionTypes from './actionTypes';

// 列表下标
let index = 0;
// 从本地存储中获取待办列表
let initState = localStorage.getItem('todos');
initState = JSON.parse(initState);
// 如果第一次打开，初始化为空数组
if (!initState) {
    initState = [];
}
const length = initState.length;
// 如果有数据，下标从数组最后一项的id开始计数
if (length > 0) {
    index = initState[length - 1].index;
}
// 如果没有数据，下标从0开始
else {
    index = 0;
}

export const reducer = (state = initState, action) => {
    let newList = [];
    switch (action.type) {
        case actionTypes.ADD:
            newList = [
                ...state,
                {
                    index: ++index,
                    text: action.text,
                    state: false
                }
            ];
            break;
        case actionTypes.DELETE:
            newList = state.filter((item) => {
                return item.index !== action.index;
            });
            break;
        case actionTypes.TOGGLE:
            newList = state.map((item) => {
                if (item.index === action.index) {
                    return {
                        ...item,
                        state: !item.state
                    };
                }
                else {
                    return item;
                }
            });
            break;
        default:
            newList = state;
            break;
    }

    localStorage.setItem('todos', JSON.stringify(newList));

    return newList;
};


