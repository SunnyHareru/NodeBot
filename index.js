const Discord = require('discord.js')
const webshot = require('webshot');


const bot = new Discord.Client()

const { token } = require("./token.json");


bot.on('ready', function (){
    bot.user.setActivity('Diablo III').catch(console.error)
})

bot.on('message', function(message){
    if (message.content === 'Just do it'){
        message.reply('Dont let your dreams be dreams !')
    }
    if (message.content === 'i'){

		webshot('google.com', 'google.png', function(err) {
		});

		message.channel.send({embed: {
		    color: 3447003,
		    author: {
		      name: bot.user.username,
		      icon_url: bot.user.avatarURL
		    },
		    title: "Titre d'un embed",
		    url: "http://google.com",
		    description: "Petit test desc.",
		    image: {
		    	url : "https://www.w3schools.com/howto/img_fjords.jpg"
		    },
		    timestamp: new Date(),
		    footer: {
		      icon_url: bot.user.avatarURL,
		      text: "© Example"
		    }
		  }
		});
    }
})

bot.login(token)

//DOC api swagger

//