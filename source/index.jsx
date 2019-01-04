import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import PromiseBluebird from 'bluebird';

import './styles/general.less';

import history from './history';
import store from './store';

import AppView from './views/components/AppView';
import MainView from './views/components/MainView';
import JsonView from './views/components/JsonView';
import ThirdView from './views/components/ThirdView';
import CampaignsView from './views/components/CampaignsView';

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
