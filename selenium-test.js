const { Builder, By, Key, Capabilities, until } = require("selenium-webdriver");
const {
  setDefaultService,
  ServiceBuilder,
} = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

setDefaultService(new ServiceBuilder(chromedriver.path).build());

async function loginTest() {
  let driver = await new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  await driver.get("http://localhost:8080");
  await driver.findElement(By.name("login")).sendKeys("test1@test.com");
  await driver.findElement(By.name("password")).sendKeys("123456");
  await driver.findElement(By.id("submit-input")).sendKeys(Key.ENTER);
  await driver.wait(until.alertIsPresent());
  await driver.switchTo().alert().accept();

  await driver.findElement(By.name("login")).clear();
  await driver.findElement(By.name("login")).sendKeys("test@test.com");
  await driver.findElement(By.name("password")).clear();
  await driver.findElement(By.name("password")).sendKeys("123456");
  await driver.findElement(By.id("submit-input")).sendKeys(Key.ENTER);
}

loginTest();
