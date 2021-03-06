import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './styles/general.css';
import store from './store';

import AppView from './views/AppView';

const MainView = React.lazy(() => import('./views/MainView'));
const ThirdView = React.lazy(() => import('./views/ThirdView'));
const CampaignsView = React.lazy(() => import('./views/CampaignsView'));
const ComponentsView = React.lazy(() => import('./views/ComponentsView'));

render(
  <Provider store={store}>
    <Router>
      <AppView>
        <Switch>
          <React.Suspense fallback={'Loading...'}>
            <Route exact path='/' component={MainView}/>
            <Route path='/third' component={ThirdView}/>
            <Route path='/campaigns' component={CampaignsView}/>
            <Route path='/components' component={ComponentsView}/>
          </React.Suspense>
        </Switch>
      </AppView>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
