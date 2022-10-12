import type { Page } from 'puppeteer';

const createTestIdSelector = (testId: string) => `[data-testid="${testId}"]`;

export const waitForTestId = async (page: Page, testId: string) => {
  await page.waitForSelector(createTestIdSelector(testId));
};
