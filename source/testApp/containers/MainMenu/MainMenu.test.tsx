import React from 'react';
import { testRender } from '../../../__tests__/testRender';
import { MainMenu } from './MainMenu';
import { MainMenuDriver } from './MainMenu.driver';

type RenderOptions = {
  appVersion?: string;
};

const render = (options: RenderOptions = {}): MainMenuDriver => {
  const { appVersion } = options;
  const component = testRender(<MainMenu />, { appVersion });
  return new MainMenuDriver(component);
};

describe('MainMenu', () => {
  it('should render app version', async () => {
    const appVersion = '1.0.1a';
    const driver = render({ appVersion });
    expect(await driver.getAppVersion()).toBe(appVersion);
  });

  it('should have "Main" button', async () => {
    const driver = render();
    expect(await driver.mainBtnExists()).toBe(true);
  });

  it('should have "Campaigns" button', async () => {
    const driver = render();
    expect(await driver.campaignsBtnExists()).toBe(true);
  });

  fit('should have "Components" button', async () => {
    const driver = render();
    expect(await driver.componentsBtnExists()).toBe(true);
  });
});
