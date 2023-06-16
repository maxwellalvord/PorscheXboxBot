const { By , Key, Builder} = require("selenium-webdriver");
require("chromedriver");

const puppeteer = require("puppeteer");

async function fill_form(){
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: './tmp'
  });
  const page = await browser.newPage();

  await page.goto('https://www.porschexboxsweepstakes.com');

  await page.setViewport({width: 1080, height: 1024});

  await page.type("#fname", "Maxwell");
  await page.type("#lname", "Alvord");
  await page.type("#email", "maxwellalvord@gmail.com");
  // await page.screenshot({ path: 'test.png' });
  // await browser.close();


  // let driver = await new Builder().forBrowser("chrome").build();

  // await driver.get("https://www.porschexboxsweepstakes.com");

  // await driver.findElement(By.id("fname")).sendKeys("Maxwell");
  // await driver.findElement(By.id("lname")).sendKeys("Alvord");
  // await driver.findElement(By.id("email")).sendKeys("maxwellalvord@gmail.com");
  // await driver.findElement(By.xpath("//label[@for='opt_rules']")).click();


  // await driver.findElement(By.className("btn btn-primary d-block w-100")).click();
  

  console.log("Success");

  // setInterval(function(){
  //   driver.quit();
  // }, 7000);
  
}

fill_form()