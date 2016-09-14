import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

const myLocationsApp = combineReducers({
    routing: routerReducer,
});

export const store = createStore(myLocationsApp, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);
