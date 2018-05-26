import { take, put, all } from 'redux-saga/effects';
import request from 'superagent-bluebird-promise';
import * as campaignsConst from './campaignsConst';
import {
    campaignsLoaded,
    campaignsLoadingError,
} from './campaignsActions';

export function loadCampaignSagaFactory(request) {
    return function* loadCampaignSaga() {
        while (true) {
            yield take(campaignsConst.LOAD_CAMPAIGNS);
            try {
                const result = yield request
                    .get('/api/campaigns')
                    .promise();

                yield put(campaignsLoaded(result.body));
            } catch (err) {
                yield put(campaignsLoadingError(err));
            }
        }
    };
}

export default function* campaignsSagas() {
    yield all([
        loadCampaignSagaFactory(request)(),
    ]);
}
