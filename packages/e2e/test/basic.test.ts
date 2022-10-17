import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { getDocument, queries, waitFor } from 'pptr-testing-library';
import puppeteer from 'puppeteer';
import type { Browser, Page } from 'puppeteer';

const { getByTestId } = queries;

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
    const $document = await getDocument(page);
    await waitFor(() => getByTestId($document, 'MainView'));
  });
});
