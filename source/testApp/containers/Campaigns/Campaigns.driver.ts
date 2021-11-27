import { RenderResults } from '../../../__tests__/testRender';
import { testIdExists } from '../../../__tests__/utils';
import { TCampaign } from './Campaigns';

type CampaignOptions = {
  name?: string;
  picture?: string;
  description?: string;
};

export const createCampaignMock = (
  options: CampaignOptions = {}
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

  campaignsListExist(): boolean {
    return testIdExists(this.component, 'campaigns-list');
  }

  getCampaignsAmount(): number {
    const { getAllByTestId } = this.component;
    const campaignsEl = getAllByTestId('single-campaign');
    return campaignsEl.length;
  }
}
