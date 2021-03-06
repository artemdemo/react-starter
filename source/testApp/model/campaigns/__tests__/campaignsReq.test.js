/* eslint-disable no-console */
import * as campaignsReq from '../campaignsReq';

jest.mock('axios');

describe('campaignsReq', () => {
    const requestMock = require('axios');

    it('Should call campaigns url', (done) => {
        requestMock.default.get.mockResolvedValueOnce({
            data: {},
        });
        campaignsReq.loadCampaigns()
            .then(() => {
                expect(requestMock.default.get)
                    .toBeCalledWith('/api/campaigns');
                done();
            });
    });
});
