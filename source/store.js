import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import _isFunction from 'lodash/isFunction';

import combinedReducers from './reducers';
import rootSaga from './sagas';

// There is some weird bug with combination fo sagas and webpack 4
// So it's not getting `default` export even if I'm asking it to
// The work around is to do it explicitly
const sagaMiddleware = _isFunction(createSagaMiddleware) ? createSagaMiddleware() : createSagaMiddleware.default();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
