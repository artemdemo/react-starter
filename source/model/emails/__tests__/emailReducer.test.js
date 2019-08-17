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
});
