import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    routing: routerReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
