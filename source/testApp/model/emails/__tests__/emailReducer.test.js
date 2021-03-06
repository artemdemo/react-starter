import reducer from '../emailsReducer';
import * as actions from '../emailsActions';

jest.mock('redux-actions');

describe('emailReducer', () => {
    it('list of methods and init state', (done) => {
        reducer().then(([state, initState]) => {
            expect(Object.keys(state).sort()).toEqual([
                `${actions.loadEmails}`,
                `${actions.emailsLoaded}`,
                `${actions.emailsLoadingError}`,
            ].sort());
            expect(initState).toEqual({
                data: [],
                loading: false,
                loadingError: null,
            });
            done();
        });
    });

    it('should handle loadEmails', (done) => {
        reducer().then(([state]) => {
            const mockState = {
                loading: false,
            };
            expect(state[actions.loadEmails](mockState)).toEqual({
                ...mockState,
                loading: true,
            });
            done();
        });
    });

    it('should handle emailsLoaded', (done) => {
        reducer().then(([state]) => {
            const mockState = {
                data: null,
                loading: true,
                loadingError: new Error(),
            };
            const mockAction = {
                payload: 'mock data',
            };
            expect(state[actions.emailsLoaded](mockState, mockAction)).toEqual({
                ...mockState,
                data: mockAction.payload,
                loading: false,
                loadingError: null,
            });
            done();
        });
    });

    it('should handle emailsLoadingError', (done) => {
        reducer().then(([state]) => {
            const mockState = {
                loading: true,
                loadingError: null,
            };
            const mockAction = {
                payload: 'mock data error',
            };
            expect(state[actions.emailsLoadingError](mockState, mockAction)).toEqual({
                ...mockState,
                loading: false,
                loadingError: mockAction.payload,
            });
            done();
        });
    });
});
