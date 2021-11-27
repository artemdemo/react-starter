import { RenderResults } from '../../__tests__/testRender';

export class MainMenuDriver {
  constructor(public readonly component: RenderResults) {}

  getAppVersion() {
    const { getByTestId } = this.component;
    const btn = getByTestId('mainMenu-app-version');
    return btn.textContent;
  }
}
