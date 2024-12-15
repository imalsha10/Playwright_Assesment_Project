import { test, expect, Locator } from '@playwright/test';

test('Search for an article on Wiley website', async ({ page }) => {
  
  await page.goto('https://onlinelibrary.wiley.com/');

 
  const search: Locator = page.locator('//input[@id="searchField1"]');
  await search.waitFor({ state: 'visible' });
  await search.fill('Abacus');
 
  const searchButton: Locator = page.locator('//button[@aria-label="Submit Search"]');
  await searchButton.waitFor({ state: 'visible' });
  
  await searchButton.click();
 
});





