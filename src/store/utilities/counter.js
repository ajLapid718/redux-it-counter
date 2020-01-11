// ACTION TYPES;
// These action types will be placed inside of action objects and then evaluated...
//...by the reducer function in the switch/case statements;
const INCREMENT = "INCREMENT";

// ACTION CREATOR;
// This is a function that will return an action object;
// We will use these in our React components;
export function increment() {
    return {
        type: INCREMENT
    }
}

// NORMALLY THIS IS WHERE THUNKS WOULD BE PLACED, but since we are not doing anything asynchronous...
//...we do not need thunks right now;

// reducer function;
function counterReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        default:
            return state;
    }
}

export default counterReducer;