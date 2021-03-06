import {all} from 'redux-saga/effects';
import emails from './testApp/model/emails/emailsSagas';

export default function* rootSaga() {
  yield all([
    emails(),
  ]);
}
