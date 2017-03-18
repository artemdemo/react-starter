import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

/**
 * MockProvider
 * @doc https://github.com/arnaudbenard/redux-mock-store
 */
const MockProvider = (props) => {
    const { state } = props;
    return (
        <Provider store={mockStore(state)}>
            {props.children}
        </Provider>
    );
};

MockProvider.propTypes = {
    state: React.PropTypes.shape({}),
};

export default MockProvider;
