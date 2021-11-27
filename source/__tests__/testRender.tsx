import React, { ReactElement } from 'react';
import {
  render,
  RenderOptions as RenderOptionsOrig,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../contexts/app/AppContext';
import { TransProvider } from '../contexts/trans/TransContext';

export interface RenderOptions extends RenderOptionsOrig {
  appVersion?: string;
}

export interface RenderResults extends ReturnType<typeof render> {}

type CreateProvidersOptions = {
  appVersion?: string;
};

const createProviders: (options?: CreateProvidersOptions) => React.FC =
  (options = {}) =>
  (props) => {
    const { appVersion } = options;
    return (
      <MemoryRouter>
        <AppProvider appVersion={appVersion}>
          <TransProvider en={{}}>{props.children}</TransProvider>
        </AppProvider>
      </MemoryRouter>
    );
  };

export const testRender = (
  component: ReactElement,
  options?: RenderOptions
): RenderResults => {
  return render(component, {
    wrapper: createProviders({ appVersion: options?.appVersion }),
    ...options,
  });
};
