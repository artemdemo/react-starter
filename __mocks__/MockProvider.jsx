import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const MockProvider = ({ children }) => {
    return (
        <Provider store={mockStore()}>
            {children}
        </Provider>
    );
};

export default MockProvider;
