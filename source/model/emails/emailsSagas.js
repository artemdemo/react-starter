import { take, put, all } from 'redux-saga/effects';
import request from 'superagent-bluebird-promise';
import * as actions from './emailsActions';

function* loadEmailsSaga() {
    while (true) {
        yield take(actions.loadEmails);
        try {
            const result = yield request
                .get('/api/emails')
                .promise();

            yield put(actions.emailsLoaded(result.body));
        } catch (err) {
            yield put(actions.emailsLoadingError(err));
        }
    }
}

export default function* campaignsSagas() {
    yield all([
        loadEmailsSaga(),
    ]);
}
