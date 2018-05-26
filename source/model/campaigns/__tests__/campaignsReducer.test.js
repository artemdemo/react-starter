import * as actions from '../campaignsActions';
import reducer from '../campaignsReducer';

const initState = {
    data: [],
    loading: false,
    loadingError: null,
};

describe('campaignsReducer', () => {
    it('should return initial value', () => {
        expect(reducer(undefined, {}))
            .toEqual({
                ...initState,
            });
    });

    it('should handle LOAD_CAMPAIGNS', () => {
        expect(reducer(undefined, actions.loadCampaigns()))
            .toEqual({
                ...initState,
                loading: true,
            });
    });

    it('should handle CAMPAIGNS_LOADED', () => {
        const data = [
            {id: 12, name: 'Some name'},
        ];
        expect(reducer({
            ...initState,
            loading: true,
            loadingError: true,
        }, actions.campaignsLoaded(data)))
            .toEqual({
                ...initState,
                data,
                loading: false,
                loadingError: null,
            });
    });

    it('should handle CAMPAIGNS_LOADING_ERROR', () => {
        const err = new Error('Some error');
        expect(reducer({
            ...initState,
            loading: true,
        }, actions.campaignsLoadingError(err)))
            .toEqual({
                ...initState,
                loading: false,
                loadingError: err,
            });
    });
});
