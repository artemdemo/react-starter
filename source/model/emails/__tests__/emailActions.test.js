import * as actions from '../emailsActions';

describe('emailsActions', () => {
    it('loadEmails', () => {
        expect(actions.loadEmails()).toEqual({
            type: 'LOAD_EMAILS',
        });
    });

    it('emailsLoaded', () => {
        expect(actions.emailsLoaded()).toEqual({
            type: 'EMAILS_LOADED',
        });
    });

    it('emailsLoadingError', () => {
        expect(actions.emailsLoadingError()).toEqual({
            type: 'EMAILS_LOADING_ERROR',
        });
    });
});
