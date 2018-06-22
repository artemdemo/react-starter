import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import PromiseBluebird from 'bluebird';

import './styles/general.less';

import history from './history';
import store from './store';

import AppView from './views/AppView';
import MainView from './views/MainView';
import JsonView from './views/JsonView';
import ThirdView from './views/ThirdView';
import CampaignsView from './views/CampaignsView';

PromiseBluebird.config({
    warnings: false,
    cancellation: true,
});

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={AppView}>
                <IndexRoute component={MainView} />
                <Route path='json' component={JsonView} />
                <Route path='third' component={ThirdView} />
                <Route path='campaigns' component={CampaignsView} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
