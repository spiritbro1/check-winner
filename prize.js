const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"
// Configure Gate APIv4 key authentication:
client.setApiKeySecret(process.env.key, process.env.secret);

const api = new GateApi.WalletApi(client);
const opts = {
  'currency': 'USD' // string | Currency unit used to calculate the balance amount. BTC, CNY, USD and USDT are allowed. USDT is the default.
};
api.getTotalBalance(opts)
   .then(value => parseInt(value.body.total.amount)!==0?sendMessage("<b>PRIZE IS RELEASED!!!!</b><a href='https://akash.bigdipper.live/account/akash1xw6qvxd4lsmm8kwz8lv0gfsrzemlwnz9zcjly3'>akash1xw6qvxd4lsmm8kwz8lv0gfsrzemlwnz9zcjly3</a>"):sendMessage2("still no prize"),
         error => sendMessage2(JSON.stringify(error)));

         async function sendMessage2(message){
    

            // replace the value below with the Telegram token you receive from @BotFather
            const token = process.env.token;
            
            // Create a bot that uses 'polling' to fetch new updates
            const bot = new TelegramBot(token, { polling: false });
           
            bot.sendMessage(process.env.bot, message,{disable_notification:true});
        
        }
        async function sendMessage(message){
            
        
            // replace the value below with the Telegram token you receive from @BotFather
            const token = process.env.token;
            
            // Create a bot that uses 'polling' to fetch new updates
            const bot = new TelegramBot(token, { polling: false });
        
            bot.sendMessage(process.env.bot, message,{parse_mode:"HTML"});
            // return bot.stopPolling() 
        }
        