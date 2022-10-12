import campaigns from './mock-data/campaigns.json';
import emails from './mock-data/emails.json';

const campaignsRegex = /\/api\/campaigns/;
const emailsRegex = /\/api\/email/;

export const proxy = {
  '/api': {
    bypass: (req: any, res: any) => {
      const testUrl = (urlRegex: RegExp, method: string = 'GET') =>
        urlRegex.test(req.url) && req.method === method;

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
