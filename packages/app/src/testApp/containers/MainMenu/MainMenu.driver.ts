import { RenderResults } from '../../../__tests__/testRender';
import { testIdExistsAsync } from '../../../__tests__/utils';

export class MainMenuDriver {
  constructor(public readonly component: RenderResults) {}

  async getAppVersion(): Promise<string | null> {
    const { findByTestId } = this.component;
    const el = await findByTestId('mainMenu-app-version');
    return el.textContent;
  }

  private async testIdExistsAsync(key: string): Promise<boolean> {
    return testIdExistsAsync(this.component, key);
  }

  async mainBtnExists(): Promise<boolean> {
    return this.testIdExistsAsync('mainMenu-main');
  }

  async campaignsBtnExists(): Promise<boolean> {
    return this.testIdExistsAsync('mainMenu-campaigns');
  }

  async componentsBtnExists(): Promise<boolean> {
    return this.testIdExistsAsync('mainMenu-components');
  }
}
