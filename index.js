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
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://kdp.amazon.com/fr_FR/title-setup/paperback/new/details?ref_=kdp_kdp_BS_D_cr_ti', {
    waitUntil: 'networkidle2',
  });
 let bodyHTML=await page.evaluate(()=>document.body.innerHTML)
  console.log(bodyHTML)

  // await browser.close();
})();
 