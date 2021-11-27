import React from 'react';
import { testRender } from '../../__tests__/testRender';
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
  it('should render app version', () => {
    const appVersion = '1.0.1a';
    const driver = render({ appVersion });
    expect(driver.getAppVersion()).toBe(appVersion);
  });

  it('should have "Main" button', () => {
    const driver = render();
    expect(driver.mainBtnExists()).toBe(true);
  });

  it('should have "Campaigns" button', () => {
    const driver = render();
    expect(driver.campaignsBtnExists()).toBe(true);
  });

  it('should have "Components" button', () => {
    const driver = render();
    expect(driver.componentsBtnExists()).toBe(true);
  });
});
