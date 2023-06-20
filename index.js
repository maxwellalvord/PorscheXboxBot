

const puppeteer = require("puppeteer-extra");

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function fill_form(){
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto('https://www.porschexboxsweepstakes.com');

  await page.type("#fname", "Maxwell");
  await page.type("#lname", "Alvord");
  await page.type("#email", "maxwellalvord@gmail.com");
  await page.locator('.form-check label').click();
  await page.locator('.btn.btn-primary').click();
  console.log("Success");
  browser.close();
 
  
}

fill_form()