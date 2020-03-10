import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import './styles/general.less';

import history from './history';
import store from './store';

import AppView from './views/components/AppView';
import MainView from './views/components/MainView';
import JsonView from './views/components/JsonView';
import ThirdView from './views/components/ThirdView';
import CampaignsView from './views/components/CampaignsView';
import ComponentsView from './views/components/ComponentsView';

render(
    <Provider store={store}>
        <Router history={history}>
            <AppView>
                <Route exact path='/' component={MainView} />
                <Route path='/json' component={JsonView} />
                <Route path='/third' component={ThirdView} />
                <Route path='/campaigns' component={CampaignsView} />
                <Route path='/components' component={ComponentsView} />
            </AppView>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
