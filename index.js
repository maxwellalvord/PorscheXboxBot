

const puppeteer = require("puppeteer-extra");

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function fill_form(){
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  let timesRun = 0;

  await page.goto('https://www.porschexboxsweepstakes.com');

  await page.type("#fname", "Maxwell");
  await page.type("#lname", "Alvord");
  await page.type("#email", "maxwellalvord@gmail.com");
  await page.locator('.form-check label').click();
  const interval = setInterval(async function(){
    await page.locator('.btn.btn-primary').click();
    console.log('success')
    timesRun += 1;
    if(timesRun === 3){
        clearInterval(interval);
    }
  }, 300);
  setInterval(function(){
    browser.close();
    process.kill();
  }, 1200);
  
}

fill_form()