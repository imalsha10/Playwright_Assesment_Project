import { test, expect } from '@playwright/test';

test('Click Individual Login in Dropdown', async ({ page }) => {
   await page.goto('https://onlinelibrary.wiley.com', { timeout: 60000 }); 

   const loginRegisterButton = page.locator('text=Login / Register');
   
   await loginRegisterButton.waitFor({ timeout: 10000 });
   await loginRegisterButton.click();
   await page.getByRole('link', { name: 'Individual login', exact: true }).click({ timeout: 10000 });
  });
