import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import PromiseBluebird from 'bluebird';

import './styles/general.less';

import history from './history';
import store from './store';

import AppView from './views/AppView';
import MainView from './views/MainView';
import JsonView from './views/JsonView';
import ThirdView from './views/ThirdView';

PromiseBluebird.config({
    warnings: false,
    cancellation: true,
});

render(
    <Provider store={store}>
        <Router history={history}>
            <AppView>
                <Route exact path='/' component={MainView} />
                <Route path='/json' component={JsonView} />
                <Route path='/third' component={ThirdView} />
            </AppView>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
