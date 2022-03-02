const open = require('open');
const reader = require('xlsx')
const file = reader.readFile('./test.xlsx')
require('dotenv').config()
// process.env.NameofEnv
/*  

let data = []
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
        temp.forEach((res) => {
        data.push(res)
   })
}
  
// Printing data
console.log(data)
//open('http://sindresorhus.com'); */

const puppeteer = require('puppeteer');

(async () => {
    
  const browser = await puppeteer.launch({ headless: false,defaultViewport: null });
  const page = await browser.newPage();
  await page.goto('https://kdp.amazon.com/fr_FR/title-setup/paperback/new/details?ref_=kdp_kdp_BS_D_cr_ti', {
    waitUntil: 'networkidle2',
  });

  await page.type('[name=email]',process.env.EMAIL,{delay:200})
  await page.type('[name=password]',process.env.PASSWORD,{delay:200})
  //await page.click("input[type=checkbox]");
  await page.click("input[type=submit]");
  await page.waitForSelector("#data-print-book-title",{visible:true});
  await page.click("#data-print-book-title");
  await page.type('#data-print-book-title', "Hi I'M TITLE2", {delay: 120,});
  await page.type('#data-print-book-subtitle', "Hi I'M TITLE", {delay: 120,});
  await page.type("#data-print-book-primary-author-first-name","Hi I'M A FIRST NAME",{ delay: 120 });
  await page.type("#data-print-book-primary-author-last-name","Hi I'M A FIRST NAME",{ delay: 120 });

// besion d aide

  await page.waitForSelector(".editor",{visible:true});
  await page.type(".editor", "Hi I'M A DESCRIPTION", {delay: 120});
  await page.click("#non-public-domain", {delay: 25,});
  await page.type("#data-print-book-keywords-0", "HY I'M A SUBTITLE 1", {delay: randomInt(150, 250),});
  await page.type("#data-print-book-keywords-1", "HY I'M A SUBTITLE 2", {delay: randomInt(150, 250),});
  await page.type("#data-print-book-keywords-2", "HY I'M A SUBTITLE 3", {delay: randomInt(150, 250),});
  await page.type("#data-print-book-keywords-3", "HY I'M A SUBTITLE 4", {delay: randomInt(150, 250),});
  await page.type("#data-print-book-keywords-4", "HY I'M A SUBTITLE 5", {delay: randomInt(150, 250),});
  await page.type("#data-print-book-keywords-5", "HY I'M A SUBTITLE 6", {delay: randomInt(150, 250),});
  await page.type("#data-print-book-keywords-6", "HY I'M A SUBTITLE 7", {delay: randomInt(150, 250),});
  await page.click("#data-print-book-categories-button-proto-announce");
  await page.$$eval("#category-chooser-popover .a-link-normal", (links) =>links.forEach((link) => link.click()));
  await page.click("#data-print-book-categories-button-proto-announce");
  await page.click("#unsaved-changes-cancel-announce");

  await page.$$eval(".a-label", (links) =>
  links.forEach((el) => {
    el.textContent === "Global Warming & Climate Change" ? el.click() : true;
    el.textContent === "Meteorology & Climatology" ? el.click() : true;
  })
);
  await page.$$eval(".a-button-input", (elements) => elements[4].click());
  await page.$$eval(".jele-override-input-width-radio input", (elements) =>elements[0].click());
  await page.click("#save-and-continue-announce");

  // await browser.close(); data[print_book][subtitle]
})();
 