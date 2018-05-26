import { take } from 'redux-saga/effects';
import _isError from 'lodash/isError';
import * as constants from '../campaignsConst';
import * as actions from '../campaignsActions';
import campaignsSagas, {
    loadCampaignSagaFactory,
} from '../campaignsSagas';

describe('campaignsSagas', () => {
    it('should handle LOAD_CAMPAIGNS', () => {
        const gen = loadCampaignSagaFactory()();
        expect(gen.next().value)
            .toEqual(take(constants.LOAD_CAMPAIGNS));
    });

    it('should handle get request', () => {
        const request = {
            get: jest.fn(),
        };
        const gen = loadCampaignSagaFactory(request)();
        gen.next();
        gen.next();
        expect(request.get).toBeCalledWith('/api/campaigns');
    });

    it('should put campaignsLoaded()', () => {
        const result = {
            body: [
                {id: 1, name: 'Some name'},
            ],
        };
        const request = {
            get() {
                return {
                    promise: () => Promise.resolve(),
                };
            },
        };
        const gen = loadCampaignSagaFactory(request)();
        gen.next();
        gen.next();
        const loadedResult = gen.next(result).value;
        expect(loadedResult.hasOwnProperty('PUT')).toBe(true);
        expect(loadedResult.PUT.action)
            .toEqual(actions.campaignsLoaded(result.body));
    });

    it('should put campaignsLoadingError()', () => {
        const gen = loadCampaignSagaFactory()();
        gen.next();
        const loadedResult = gen.next().value;
        expect(loadedResult.hasOwnProperty('PUT')).toBe(true);
        expect(loadedResult.PUT.action.type)
            .toBe(constants.CAMPAIGNS_LOADING_ERROR);
        expect(_isError(loadedResult.PUT.action.err)).toBe(true);
    });

    it('should return list of sagas', () => {
        const gen = campaignsSagas();
        const result = gen.next().value;
        expect(result.hasOwnProperty('ALL')).toBe(true);
    });
});
