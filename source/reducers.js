import { combineReducers } from 'redux';
import campaigns from './model/campaigns/campaignsReducer';

const reducers = combineReducers({
    campaigns,
});

export default reducers;
