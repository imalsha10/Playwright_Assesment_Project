import { test, expect } from '@playwright/test';

test('Advanced Search', async ({ page }) => {
 await page.goto('https://onlinelibrary.wiley.com/search/advanced', { timeout: 60000 });


  page.setDefaultTimeout(10000);

  await page.selectOption('select#searchArea1', { label: 'Title' });
  await page.fill('input[name="text1"]', 'Identification of RNA-dependent liquid-liquid phase separation proteins using an artificial intelligence strategy', { timeout: 5000 });
  console.log('First input field "Title" filled.');


  await page.selectOption('select#searchArea2', { label: 'Anywhere' });
  await page.fill('input[name="text2"]', 'Artificial Intelligence', { timeout: 5000 });
  console.log('Second input field "Anywhere" filled.');

 
  await page.selectOption('select#searchArea3', { label: 'Author' }); 
  await page.fill('input[name="text3"]', 'Zahoor Ahmed,', { timeout: 5000 }); 
  console.log('Third input field "Author" filled.');
  
  await page.fill('input#publication', 'Journal of AI Research', { timeout: 5000 });
  console.log('"Published In" field filled.');
  
  await page.click('span.label-txt', { timeout: 5000 }); 
  console.log('"All Dates" selected.');


  await page.click('button#advanced-search-btn', { timeout: 5000 });
  console.log('Search button clicked.');


});