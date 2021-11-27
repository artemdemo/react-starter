import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { MainMenu } from './containers/MainMenu/MainMenu';
import Button, { EButtonAppearance } from '../components/Button/Button';
import { t } from '../services/i18n';

const MainView = React.lazy(() =>
  import('./views/MainView').then((module) => ({ default: module.MainView }))
);
const ThirdView = React.lazy(() =>
  import('./views/ThirdView').then((module) => ({ default: module.ThirdView }))
);
const CampaignsView = React.lazy(() =>
  import('./views/CampaignsView').then((module) => ({
    default: module.CampaignsView,
  }))
);
const ComponentsView = React.lazy(() =>
  import('./views/ComponentsView').then((module) => ({
    default: module.ComponentsView,
  }))
);

export const TestApp: React.FC = (props) => {
  const navigate = useNavigate();

  const goToThirdView = () => {
    navigate('/third');
  };

  return (
    <>
      <MainMenu />
      <p>
        <Button
          type="button"
          onClick={goToThirdView}
          appearance={EButtonAppearance.LIGHT}
        >
          <FontAwesomeIcon icon={faLink} />
          &nbsp; Open third page programmatically
        </Button>
      </p>

      <hr />

      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={t('loading')}>
              <MainView />
            </React.Suspense>
          }
        />
        <Route
          path="/third"
          element={
            <React.Suspense fallback={t('loading')}>
              <ThirdView />
            </React.Suspense>
          }
        />
        <Route
          path="/campaigns"
          element={
            <React.Suspense fallback={t('loading')}>
              <CampaignsView />
            </React.Suspense>
          }
        />
        <Route
          path="/components"
          element={
            <React.Suspense fallback={t('loading')}>
              <ComponentsView />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};
