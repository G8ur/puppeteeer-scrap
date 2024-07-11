const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com/");
    await page.screenshot({ path: 'example.png' });

    await page.click('a[href="/login"]');

    await page.type('#username' , "John", {delay:100})
    await page.type('#password' , "Doe", {delay:100})
    
    // await browser.close();

})(); 