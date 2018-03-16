import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducers = combineReducers({
    // place here your reducers
});

const store = createStore(reducers, applyMiddleware());

export default store;
