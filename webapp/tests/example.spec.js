const { test, expect } = require('@playwright/test')

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('navbar__inner -navbar_title');
  await expect(title).toHaveText('Playright')
})