// src ---> store ---> index.js;
// this is the file where we will set up our Redux store;

// necessities and accessories for our Redux store;
// combineReducers: will take all of your reducer functions and put them into an object where...
// ...the key:value signature looks like this: {nameOfReducerA: reducerAFunction, nameOfReducerB: reducerBFunction};
// combineReducers part II: when an action is dispatched to the store, combineReducers will loop through all of the keys of the combined reducers object, and it will invoke all of the reducer functions...
//...in this way, any case/switch statement that is relevant to the action will be called (multiple reducers can respond to the same action type);

// createLogger: as demonstrated in class, you can see how the previous state looked prior to dispatching your action object, you can see the actual action object at hand being dispatched, and you can see the outcome of merging the previous state with your action object;
// thunkMiddleware: all middleware runs in between point A and point B --- for this middleware specifically, what it will do is type check the action argument that is passed to the reducer function --- if it is an object, then it will pass it along to either the next middleware in the chain or it will pass it directly to the reducer function --- however, if it is a function that contains asynchronous calls, it will invoke that function, pass it the dispatch function, and allow you to dispatch within that subroutine (ultimately, this results in a plain JS object entering the reducer function);
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// here, we would want to import our reducer functions so that we can pass them along...
// ... to your store;
import counterReducer from "../store/utilities/counter";


// rootReducer: this variable will hold the object that will contain all of your reducers;
// logger: this is the logger we saw earlier --- by passing it collapsed: true, the contents of each object that is logged to the console will already be collapsed;
// Make sure the argument passed to combineReducers is an object whose values are reducers.
const rootReducer = combineReducers({counterReducer}); // {counterReducer: counterReducer};
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(ThunkMiddleware, logger));
// create the store;
const store = createStore(rootReducer, middleware);

// export this so that way we can pass it to the <Provider /> component so that way any connected component will be able to reference and communicate with that store;
export default store;