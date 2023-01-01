import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { getDocument, queries, waitFor } from 'pptr-testing-library';
import puppeteer from 'puppeteer';
import type { Browser, Page } from 'puppeteer';

const { getByTestId } = queries;

describe('jQueryVersion', async () => {
  let browser: Browser;
  let page: Page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // defaultViewport: null,
      // args: ['--start-maximized']
    });
    page = await browser.newPage();
  });

  afterEach(async () => {
    await browser.close();
  });

  test('jQuery version should be presented', async () => {
    await page.goto('http://localhost:3000/jquery');
    const $document = await getDocument(page);
    await waitFor(() => getByTestId($document, 'jQueryVersion'));
    const $el = await getByTestId($document, 'jQueryVersion');
    const version = await $el.evaluate((el) => el.textContent);
    expect(version).toBe('3.6.3');
  });

  test('jQuery version should be intercepted', async () => {
    page.setRequestInterception(true);
    page.on('request', (interceptedRequest) => {
      if (interceptedRequest.isInterceptResolutionHandled()) {
        return;
      }
      const url = interceptedRequest.url();
      if (url.startsWith('https://code.jquery.com')) {
        interceptedRequest.continue({
          url: url.replace('3.6.3', '3.6.0'),
        });
        return;
      }

      interceptedRequest.continue();
      return;
    });
    await page.goto('http://localhost:3000/jquery');
    const $document = await getDocument(page);
    await waitFor(() => getByTestId($document, 'jQueryVersion'));
    const $el = await getByTestId($document, 'jQueryVersion');
    const version = await $el.evaluate((el) => el.textContent);
    expect(version).toBe('3.6.0');
  });
});
