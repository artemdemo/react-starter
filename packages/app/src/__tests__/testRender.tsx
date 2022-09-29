import React, { ReactElement } from 'react';
import {
  render,
  RenderOptions as RenderOptionsOrig,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../contexts/app/AppContext';
import { HttpClient, HttpProvider } from '../contexts/http/HttpContext';
import { HttpClientMock } from '../contexts/http/utils/HttpClientMock';
import { RequestMock } from '../contexts/http/utils/RequestMock';

type CreateProvidersOptions = {
  appVersion?: string;
  httpRequestsMock?: RequestMock[];
};

const createWrapper: (options?: CreateProvidersOptions) => React.FC<{ children?: React.ReactNode }> =
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
  return render(component, {
    wrapper: createWrapper({ appVersion, httpRequestsMock }),
    ...options,
  });
};
