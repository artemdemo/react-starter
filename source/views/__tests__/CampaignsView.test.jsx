import React from 'react';
import renderer from 'react-test-renderer';
import BluePromise from 'bluebird';
import CampaignsView from '../components/CampaignsView';

jest.mock('../../components/Icon/Icon');
jest.mock('../../containers/Campaigns/Campaigns');
jest.mock('../../model/campaigns/campaignsReq');

describe('<CampaignsView>', () => {
    const campaignsReqMock = require('../../model/campaigns/campaignsReq');

    // I'm mocking implementation with bluebird in order to allow to use `finally()`
    campaignsReqMock.loadCampaigns.mockImplementation(() => BluePromise.resolve([]));

    it('Render with loading', () => {
        const tree = renderer.create(
            <CampaignsView />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
