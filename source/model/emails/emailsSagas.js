import { take, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './emailsActions';

function* loadEmailsSaga() {
    while (true) {
        yield take(actions.loadEmails);
        try {
            const result = yield axios
                .get('/api/emails');

            yield put(actions.emailsLoaded(result.data));
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
