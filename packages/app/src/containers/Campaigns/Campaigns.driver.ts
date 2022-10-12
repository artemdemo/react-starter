import { RenderResults } from '../../__tests__/testRender';
import { testIdExistsAsync } from '../../__tests__/utils';
import { TCampaign } from './Campaigns';

type CampaignOptions = {
  name?: string;
  picture?: string;
  description?: string;
};

export const createCampaignMock = (
  options: CampaignOptions = {},
): TCampaign => {
  const {
    name = 'test campaign',
    picture = 'http://via.placeholder.com/150x150',
    description = 'Est amet voluptate',
  } = options;
  return {
    name,
    picture,
    description,
  };
};

export class CampaignsDriver {
  constructor(public readonly component: RenderResults) {}

  async campaignsListExist(): Promise<boolean> {
    return testIdExistsAsync(this.component, 'campaigns-list');
  }

  async getCampaignsAmount(): Promise<number> {
    const { findAllByTestId } = this.component;
    const campaignsEl = await findAllByTestId('single-campaign');
    return campaignsEl.length;
  }
}
