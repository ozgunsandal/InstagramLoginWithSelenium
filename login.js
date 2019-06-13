const webdriver = require('selenium-webdriver');
let By = webdriver.By;
let until = webdriver.until;
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(/* ... */)
    .setFirefoxOptions(/* ... */)
    .build();
driver.get("http://www.instagram.com");

let girisButton = "#react-root > section > main > article > div.rgFsT > div:nth-child(2) > p > a";
let emailInput = "username";
let passInput = "password";
let loginButton = "#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div.Igw0E.IwRSH.eGOV_._4EzTm.bkEs3.CovQj.jKUp7.DhRcB";


let userName = "your_instagram_email_to_login";
let pass = "your_instagram_password";

driver.wait(until.elementLocated(By.css(girisButton)),10000).then(function()
{

  driver.findElement(By.css(girisButton)).click();

  driver.get("https://www.instagram.com/accounts/login/?source=auth_switcher").then(function()
  {
    driver.wait(until.elementLocated(By.name(emailInput)),5000).then(function()
    {
      driver.findElement(By.name(emailInput)).sendKeys(userName);
      driver.findElement(By.name(passInput)).sendKeys(pass);
      driver.findElement(By.css(loginButton)).click();
    });
  });
});
