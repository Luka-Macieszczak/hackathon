const {By, Key, Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

// let urlTest = 'https://www.amazon.com/Hogwarts-Legacy-PlayStation-5/dp/B09VXBDJ9N/ref=lp_16225016011_1_6';


async function getAmazon(url) {
    
    let chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--headless');
    chromeOptions.addArguments('--disable-gpu');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
    await driver.get(url);
    let element = await driver.findElement(By.id('productTitle'));
    let price = await driver.findElement(By.xpath('//*[@id="priceblock_ourprice"]'));

    let productName = await element.getText();
    let productPrice = await price.getText();

    console.log("Product: " + productName);
    console.log("Price: " + productPrice);

    return [productName, productPrice]

}

module.exports = getAmazon;