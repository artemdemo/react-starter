import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const myLocationsApp = combineReducers({
    routing: routerReducer,
});

const store = createStore(myLocationsApp, applyMiddleware(thunk));

export default store;
