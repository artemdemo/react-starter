import { combineReducers } from 'redux';
import emails from './model/emails/emailsReducer';

const reducers = combineReducers({
    emails,
});

export default reducers;
