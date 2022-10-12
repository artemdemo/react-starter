import React, { ReactElement } from 'react';
import {
  render,
  cleanup,
  RenderOptions as RenderOptionsOrig,
} from '@testing-library/react';
import _ from 'lodash';
import { afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../contexts/app/AppContext';
import { HttpClient, HttpProvider } from '../contexts/http/HttpContext';
import { HttpClientMock } from '../contexts/http/utils/HttpClientMock';
import { RequestMock } from '../contexts/http/utils/RequestMock';

type CreateProvidersOptions = {
  appVersion?: string;
  httpRequestsMock?: RequestMock[];
};

const createWrapper: (
  options?: CreateProvidersOptions,
) => React.FC<{ children?: React.ReactNode }> =
  (options = {}) =>
  (props) => {
    const { appVersion, httpRequestsMock = [] } = options;
    const httpClientMock = new HttpClientMock();
    httpClientMock.setRequestMocks(httpRequestsMock);
    return (
      <MemoryRouter>
        <AppProvider appVersion={appVersion}>
          <HttpProvider httpClient={httpClientMock as unknown as HttpClient}>
            {props.children}
          </HttpProvider>
        </AppProvider>
      </MemoryRouter>
    );
  };

let unmountApp: () => Promise<void>;
afterEach(async () => {
  _.isFunction(unmountApp) && (await unmountApp());
  cleanup();
});

export interface RenderResults extends ReturnType<typeof render> {}

export interface RenderOptions extends RenderOptionsOrig {
  appVersion?: string;
  httpRequestsMock?: RequestMock[];
}

export const testRender = (
  component: ReactElement,
  options: RenderOptions = {},
): RenderResults => {
  const { appVersion, httpRequestsMock } = options;
  const renderedComponent = render(component, {
    wrapper: createWrapper({ appVersion, httpRequestsMock }),
    ...options,
  });

  unmountApp = async () => {
    renderedComponent.unmount();
  };

  return renderedComponent;
};
