import React from 'react';
import { waitFor } from '@testing-library/react';
import { CampaignsViewDriver } from './CampaignsView.driver';
import { testRender } from '../../__tests__/testRender';
import { CampaignsView } from './CampaignsView';
import {
  RequestMethod,
  RequestMock,
} from '../../contexts/http/utils/RequestMock';
import { ResponseMock } from '../../contexts/http/utils/ResponseMock';
import { createCampaignMock } from '../containers/Campaigns/Campaigns.driver';

type RenderOptions = {
  httpRequestsMock?: RequestMock[];
};

const render = (options: RenderOptions = {}): CampaignsViewDriver => {
  const { httpRequestsMock } = options;
  const component = testRender(<CampaignsView />, { httpRequestsMock });
  return new CampaignsViewDriver(component);
};

describe('CampaignsView', () => {
  it('Should load campaigns and render', async () => {
    const campaignsRequestMock = new RequestMock({
      url: '/api/campaigns',
      method: RequestMethod.GET,
      response: new ResponseMock({
        data: [
          createCampaignMock({ name: 'campaign 1' }),
          createCampaignMock({ name: 'campaign 2' }),
        ],
      }),
    });
    const driver = render({ httpRequestsMock: [campaignsRequestMock] });
    await waitFor(() =>
      expect(driver.campaigns().campaignsListExist()).toBe(true)
    );
    await waitFor(() =>
      expect(driver.campaigns().getCampaignsAmount()).toBe(2)
    );
  });
});
