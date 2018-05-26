import * as constants from '../campaignsConst';
import * as actions from '../campaignsActions';

describe('campaignsActions', () => {
    it('loadCampaigns()', () => {
        expect(actions.loadCampaigns()).toEqual({
            type: constants.LOAD_CAMPAIGNS,
        });
    });

    it('campaignsLoaded()', () => {
        const data = [
            {id: 12, name: 'Some name'},
        ];
        expect(actions.campaignsLoaded(data)).toEqual({
            type: constants.CAMPAIGNS_LOADED,
            data,
        });
    });

    it('campaignsLoadingError()', () => {
        expect(actions.campaignsLoadingError()).toEqual({
            type: constants.CAMPAIGNS_LOADING_ERROR,
            err: true,
        });

        const err = new Error('Some error');
        expect(actions.campaignsLoadingError(err)).toEqual({
            type: constants.CAMPAIGNS_LOADING_ERROR,
            err,
        });
    });
});
