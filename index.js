const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function (){
    bot.user.setActivity('Diablo III').catch(console.error)
})

bot.on('message', function(message){
    if (message.content === 'Just do it'){
        message.reply('Dont let your dreams be dreams !')
    }
})

bot.login('NDAyNzc4NTI0NTEzMjA2Mjcy.DT9udQ.6y_XsPf9Awc_SbF5JYOyoJ0vQ9M')
