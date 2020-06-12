import reducers from '../reducers';

jest.mock('redux', () => ({
    combineReducers: jest.fn(data => data)
}));

jest.mock('../model/emails/emailsReducer');

const emailsReducerMock = require('../model/emails/emailsReducer').default;

describe('reducers', () => {
    it('should combine reducers', () => {
        expect(Object.keys(reducers).sort()).toEqual(['dummy', 'emails']);
    });

    it('should support dummy reducer', () => {
        const stateMock = {};
        expect(reducers.dummy(stateMock)).toBe(stateMock);
        expect(reducers.dummy()).toEqual({});
    });

    it('should support emails reducer', () => {
        expect(reducers.emails).toBe(emailsReducerMock);
    });
});
