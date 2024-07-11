const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com/");
    await page.screenshot({ path: 'example.png' });

    const grab = await page.evaluate(() => {
        const quotes =  document.querySelectorAll('.quote')
        let quotesArr =[]
        quotes.forEach((quoteTag) => {
            const getInfo = quoteTag.querySelectorAll('span')
            const actualQuote = getInfo[0]
            const actualAuthor = getInfo[1]

            const authorName = actualAuthor.querySelector("small")

            quotesArr.push({quote: actualQuote.innerText, author: authorName.innerText})


        })

        return quotesArr;

    })

    console.log(grab)
    
    await browser.close()

})(); 