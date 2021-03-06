import React from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import MainMenu from './containers/MainMenu/MainMenu';
import Button, {EButtonAppearance} from '../components/Button/Button';

const MainView = React.lazy(() => import('./views/MainView'));
const ThirdView = React.lazy(() => import('./views/ThirdView'));
const CampaignsView = React.lazy(() => import('./views/CampaignsView'));
const ComponentsView = React.lazy(() => import('./views/ComponentsView'));

export const TestApp: React.FC = (props) => {
  const history = useHistory();

  const goToThirdView = () => {
    history.push('/third');
  };

  return (
    <Router>
      <MainMenu/>
      <p>
        <Button
          type='button'
          onClick={goToThirdView}
          appearance={EButtonAppearance.LIGHT}
        >
          <FontAwesomeIcon icon={faLink}/>
          &nbsp;
          Open third page programmatically
        </Button>
      </p>

      <hr/>

      <React.Suspense fallback={'Loading...'}>
          <Switch>
            <Route exact path='/' component={MainView}/>
            <Route path='/third' component={ThirdView}/>
            <Route path='/campaigns' component={CampaignsView}/>
            <Route path='/components' component={ComponentsView}/>
          </Switch>
      </React.Suspense>
    </Router>
  );
};
