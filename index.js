const Discord = require('discord.js')
const bot = new Discord.Client()
const { token } = require("./token.json");

bot.on('ready', function (){
    bot.user.setActivity('Diablo III').catch(console.error)
})

bot.on('message', function(message){
    if (message.content === 'Just do it'){
        message.reply('Dont let your dreams be dreams !')
    }
})

bot.login(token)
