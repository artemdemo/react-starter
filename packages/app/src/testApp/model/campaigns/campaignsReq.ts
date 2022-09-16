import { HttpClient } from '../../../contexts/http/HttpContext';

export const loadCampaigns = (httpClient: HttpClient) => {
  return httpClient.get('/api/campaigns').then((result) => result.data);
};
