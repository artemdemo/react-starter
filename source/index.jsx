import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import './styles/general.less';

import history from './history';
import store from './store';

import AppView from './views/AppView';
import MainView from './views/MainView';
import SecondView from './views/SecondView';
import ThirdView from './views/ThirdView';

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={AppView}>
                <IndexRoute component={MainView} />
                <Route path='second' component={SecondView} />
                <Route path='third' component={ThirdView} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
