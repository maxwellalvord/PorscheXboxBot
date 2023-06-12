const { By , Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function fill_form(){
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.porschexboxsweepstakes.com");

  await driver.findElement(By.name("formidentifer")).sendKeys("Maxwell", Key.TAB).sendKeys("Alvord", Key.TAB).sendKeys("maxwellalvord@gmail.com");

  
}