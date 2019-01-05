import { handleActions } from 'redux-actions';
import * as actions from './emailsActions';

const initState = {
    data: [],
    loading: false,
    loadingError: null,
};

export default handleActions({
    [actions.loadEmails]: state => ({
        ...state,
        loading: true,
    }),
    [actions.emailsLoaded]: (state, action) => ({
        ...state,
        data: action.payload,
        loading: false,
    }),
    [actions.emailsLoadingError]: (state, action) => ({
        ...state,
        loading: false,
        loadingError: action.payload,
    }),
}, initState);
