import React from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import MainMenu from './containers/MainMenu/MainMenu';
import Button, {EButtonAppearance} from '../components/Button/Button';

const MainView = React.lazy(
  () => import('./views/MainView').then(module => ({ default: module.MainView }))
);
const ThirdView = React.lazy(
  () => import('./views/ThirdView').then(module => ({ default: module.ThirdView }))
);
const CampaignsView = React.lazy(
  () => import('./views/CampaignsView').then(module => ({ default: module.CampaignsView }))
);
const ComponentsView = React.lazy(
  () => import('./views/ComponentsView').then(module => ({ default: module.ComponentsView }))
);

export const TestApp: React.FC = (props) => {
  const history = useHistory();

  const goToThirdView = () => {
    history.push('/third');
  };

  return (
    <>
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
    </>
  );
};
