import * as campaignsConst from './campaignsConst';

const initState = {
    data: [],
    loading: false,
    loadingError: null,
};

export default function campaignsReducer(state = initState, action) {
    switch (action.type) {
        case campaignsConst.LOAD_CAMPAIGNS:
            return {
                ...state,
                loading: true,
            };
        case campaignsConst.CAMPAIGNS_LOADED:
            return {
                ...state,
                data: action.data,
                loading: false,
                loadingError: null,
            };
        case campaignsConst.CAMPAIGNS_LOADING_ERROR:
            return {
                ...state,
                loading: false,
                loadingError: action.err,
            };
        default:
            return state;
    }
}
