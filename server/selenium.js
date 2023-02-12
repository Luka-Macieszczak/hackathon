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
<<<<<<< HEAD
    //find price by xpath id
    let price = await driver.findElement(By.xpath('//*[@id="price_inside_buybox"]'));
=======
    let price = await driver.findElement(By.xpath('//*[@class="a-price-whole"]'));
>>>>>>> a510e88b98573e89c86e6f074bb73d9d11feb11e

    let productName = await element.getText();
    let productPrice = await price.getText();

    return [productName, productPrice]

}

module.exports = getAmazon;