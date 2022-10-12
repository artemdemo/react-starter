import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import puppeteer from 'puppeteer';
import type { Browser, Page } from 'puppeteer';
import { waitForTestId } from './services/utils';

describe('basic', async () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('MainView should be loaded', async () => {
    await page.goto('http://localhost:3000');
    await waitForTestId(page, 'MainView');
  });
});
