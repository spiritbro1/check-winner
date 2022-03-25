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
    await sendMessage("WINNER ANNOUNCEMENT READY https://metabuild.devpost.com/")
  }else{
    await sendMessage2("waiting for the winner \n button text: "+name)
  }
  
  await browser.close()
    }catch(e){
        console.log(e.message)
await sendMessage("there is an error ")
    }
  
})()

async function sendMessage2(message){
    

    // replace the value below with the Telegram token you receive from @BotFather
    const token = process.env.token;
    
    // Create a bot that uses 'polling' to fetch new updates
    const bot = new TelegramBot(token, { polling: false });
   
    bot.sendMessage(process.env.bot2, message,{disable_notification:true});

}
async function sendMessage(message){
    

    // replace the value below with the Telegram token you receive from @BotFather
    const token = process.env.token;
    
    // Create a bot that uses 'polling' to fetch new updates
    const bot = new TelegramBot(token, { polling: false });

    bot.sendMessage(process.env.bot, message);
    // return bot.stopPolling() 
}
