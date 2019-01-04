/* eslint-disable no-console */
import * as campaignsReq from '../campaignsReq';

jest.mock('superagent-bluebird-promise');

describe('campaignsReq', () => {
    const requestMock = require('superagent-bluebird-promise');

    it('Should call campaigns url', (done) => {
        campaignsReq.loadCampaigns()
            .then(() => {
                expect(requestMock.default.get)
                    .toBeCalledWith('/api/campaigns');
                done();
            });
    });
});
