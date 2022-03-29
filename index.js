const puppeteer = require('puppeteer');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

(async () => {
    try{
        const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://metabuild.devpost.com/')
  const name = await page.$eval('#secondary > a.button.radius.expand.grey.mb-3', el => el.innerText)
  console.log(name)
  if(name.toLowerCase()!=="view projects"){
//       await sendMessage("test")
    await sendMessage("WINNER ANNOUNCEMENT READY https://metabuild.devpost.com/ \n button text: "+name)
  }else{
    await sendMessage2("waiting for the winner... \n (this is a silent message which mean you still got notification but no sound just to make sure my bot works as expected) \n button text: "+name)
  }
  
  await browser.close()
    }catch(e){
        console.log(e.message)
await sendMessage("there is an error ")
    }
  
})()

