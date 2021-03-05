import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './styles/general.css';
import store from './store';

import AppView from './views/components/AppView';
import MainView from './views/components/MainView';
import ThirdView from './views/components/ThirdView';
import CampaignsView from './views/components/CampaignsView';
import ComponentsView from './views/components/ComponentsView';

render(
  <Provider store={store}>
    <Router>
      <AppView>
        <Switch>
          <Route exact path='/' component={MainView}/>
          <Route path='/third' component={ThirdView}/>
          <Route path='/campaigns' component={CampaignsView}/>
          <Route path='/components' component={ComponentsView}/>
        </Switch>
      </AppView>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
