import { createAction } from 'redux-actions';

export const loadEmails = createAction('LOAD_EMAILS');
export const emailsLoaded = createAction('EMAILS_LOADED');
export const emailsLoadingError = createAction('EMAILS_LOADING_ERROR');
