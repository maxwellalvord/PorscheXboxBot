

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

  await page.type("#fname", "sarah");
  await page.waitForTimeout(100);
  await page.type("#lname", "rice");
  await page.waitForTimeout(100);
  await page.type("#email", "sarah.rice2000@gmail.com");
  await page.waitForTimeout(100);
  await page.locator('.form-check label').click();
  await page.waitForTimeout(100);
  await page.locator('.btn.btn-primary').click();
  await page.waitForNavigation();
  // const interval = setInterval(async function(){
  //     // console.log('success')
  //     timesRun += 1;
  //   if(timesRun === 1){
  //       clearInterval(interval);
  //   }
  // }, 300);
  // setInterval(function(){
  //   browser.close();
  //   process.kill();
  // }, 1200);
  
}

fill_form()