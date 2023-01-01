import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from './hooks/useTranslation';
import { JQueryView } from './views/jQueryView';

const MainView = React.lazy(() =>
  import(
    /* webpackChunkName: "MainView" */
    './views/MainView'
  ).then((module) => ({ default: module.MainView })),
);
const ThirdView = React.lazy(() =>
  import(
    /* webpackChunkName: "ThirdView" */
    './views/ThirdView'
  ).then((module) => ({ default: module.ThirdView })),
);
const CampaignsView = React.lazy(() =>
  import(
    /* webpackChunkName: "CampaignsView" */
    './views/CampaignsView'
  ).then((module) => ({
    default: module.CampaignsView,
  })),
);
const ComponentsView = React.lazy(() =>
  import(
    /* webpackChunkName: "ComponentsView" */
    './views/ComponentsView'
  ).then((module) => ({
    default: module.ComponentsView,
  })),
);

const Suspense: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  return <React.Suspense fallback={t('loading')}>{children}</React.Suspense>;
};

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <MainView />
          </Suspense>
        }
      />
      <Route
        path="/third"
        element={
          <Suspense>
            <ThirdView />
          </Suspense>
        }
      />
      <Route
        path="/campaigns"
        element={
          <Suspense>
            <CampaignsView />
          </Suspense>
        }
      />
      <Route
        path="/components"
        element={
          <Suspense>
            <ComponentsView />
          </Suspense>
        }
      />
      <Route
        path="/jquery"
        element={
          <Suspense>
            <JQueryView />
          </Suspense>
        }
      />
    </Routes>
  );
};
