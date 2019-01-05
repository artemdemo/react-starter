/* eslint-disable consistent-return, max-len,import/newline-after-import */

const campaignsRegex = /\/api\/campaigns/;
const campaigns = require('./mock-data/campaigns.json');

const emailsRegex = /\/api\/email/;
const emails = require('./mock-data/emails.json');

module.exports = {
    '/api': {
        bypass: (req, res) => {
            const testUrl = (urlRegex, method = 'GET') => urlRegex.test(req.url) && req.method === method;

            switch (true) {
                case testUrl(emailsRegex):
                    res.json(emails);
                    return true;
                case testUrl(campaignsRegex):
                    res.json(campaigns);
                    return true;
                default:
                    return '/index.html';
            }
        },
    },
};
