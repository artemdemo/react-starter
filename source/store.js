import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducers = combineReducers({
    routing: routerReducer,
});

const store = createStore(reducers, applyMiddleware());

export default store;
