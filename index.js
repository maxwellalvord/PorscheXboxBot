const { By , Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function fill_form(){
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.porschexboxsweepstakes.com");

  await driver.findElement(By.id("fname")).sendKeys("Maxwell");
  await driver.findElement(By.id("lname")).sendKeys("Alvord");
  await driver.findElement(By.id("email")).sendKeys("maxwellalvord@gmail.com");
  // await driver.findElement(By.localName("::after")).click();


  // await driver.findElement(By.innerHTML("SUBMIT")).click();
  

  console.log("Success");

  setInterval(function(){
    driver.quit();
  }, 7000);
  
}

fill_form()