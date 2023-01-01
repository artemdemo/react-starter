import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { getDocument, queries, waitFor } from 'pptr-testing-library';
import puppeteer from 'puppeteer';
import type { Browser, Page } from 'puppeteer';

const { getByTestId } = queries;

describe.only('jQueryVersion', async () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
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
});
