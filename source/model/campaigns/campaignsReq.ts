import axios from 'axios';

export const loadCampaigns = () => {
    return axios
        .get('/api/campaigns')
        .then(result => result.data);
};
