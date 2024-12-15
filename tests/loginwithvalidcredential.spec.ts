import { test, expect } from '@playwright/test';

test('Login to Wiley ScienceConnect with valid credential', async ({ page }) => {

  await page.goto('https://wiley.scienceconnect.io/login', { timeout: 10000 });

 
  await page.fill('#email-input', 'picolambage@gmail.com', { timeout: 5000 });

  
  await page.click('#sign-in-btn', { timeout: 5000 });

  
  await page.waitForSelector('#pass-input', { timeout: 5000 });

 
  await page.fill('#pass-input', 'Test@123', { timeout: 5000 });

  
  await page.click('#password-sign-in-btn', { timeout: 5000 });

  
});



  
