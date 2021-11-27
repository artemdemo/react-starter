import { RenderResults } from '../../__tests__/testRender';
import { CampaignsDriver } from '../containers/Campaigns/Campaigns.driver';

export class CampaignsViewDriver {
  private readonly campaignsDriver: CampaignsDriver;

  constructor(public readonly component: RenderResults) {
    this.campaignsDriver = new CampaignsDriver(component);
  }

  campaigns(): CampaignsDriver {
    return this.campaignsDriver;
  }
}
