import request from 'superagent-bluebird-promise';

export const loadCampaigns = () => {
    return request
        .get('/api/campaigns')
        .promise()
        .then(result => result.body);
};
