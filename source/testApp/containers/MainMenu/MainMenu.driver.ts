import { RenderResults } from '../../__tests__/testRender';
import { testIdExists } from '../../__tests__/utils';

export class MainMenuDriver {
  constructor(public readonly component: RenderResults) {}

  getAppVersion() {
    const { getByTestId } = this.component;
    const btn = getByTestId('mainMenu-app-version');
    return btn.textContent;
  }

  private testIdExists(key: string) {
    return testIdExists(this.component, key);
  }

  mainBtnExists() {
    return this.testIdExists('mainMenu-main');
  }

  campaignsBtnExists() {
    return this.testIdExists('mainMenu-campaigns');
  }

  componentsBtnExists() {
    return this.testIdExists('mainMenu-components');
  }
}
