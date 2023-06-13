const { By , Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function fill_form(){
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.porschexboxsweepstakes.com");

  await driver.findElement(By.id("fname")).sendKeys("Maxwell", Key.TAB).sendKeys("Alvord", Key.TAB);

  // .sendKeys("Alvord", Key.TAB).sendKeys("maxwellalvord@gmail.com");

  // await driver.findElement(By.innerHTML("SUBMIT")).click();
  

  console.log("Success");

  setInterval(function(){
    driver.quit();
  }, 7000);
  
}

fill_form()