import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');


test('has title', async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();

  await page.goto('https://google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
  console.log(await page.title());

  const searchBox = page.locator('textarea[name="q"]');

  await searchBox.fill("LinkedIn");
  await page.getByRole('button', { name: 'Google Search' }).click();
  await page.getByRole('link', { name: 'LinkedIn India: Log In or Sign Up' }).click();
  await expect(page).toHaveURL('https://linkedin.com');


//    const acceptButton = page.locator('text=Accept all');
//    if (await acceptButton.isVisible()) {
//      await acceptButton.click();
//    }

//   await page.fill('input[name="q"]', 'Playwright automation');

//   await page.locator('input[name="q"]').fill("Linkedin");

//   await page.locator('input[name="q"]').click;
  // console.log(await page.locator('cite[class="tjvcx GvPZzd cHaqb"]').textContent());

  // await expect(page.locator('cite[class="tjvcx GvPZzd cHaqb"]')).toContainText('linkedin');






});
