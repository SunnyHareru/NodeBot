const Discord = require('discord.js')
const webshot = require('webshot');
const imgur   = require('imgur');
 
const bot = new Discord.Client()

const { mail, password, ClientID } = require("./imgur.json");
const { token } = require("./token.json");

imgur.setClientId(ClientID);
imgur.setCredentials(mail, password, ClientID);

bot.on('ready', function (){
    bot.user.setActivity('Diablo III').catch(console.error)
})

bot.on('message', function(message){
    if (message.content === 'Just do it'){
        message.reply('Dont let your dreams be dreams !')
    }
    if (message.content === 'i'){

    	webshot('google.com', 'stat.png', function(err) {

			imgur.uploadFile('stat.png').then(function (json) {
		         console.log(json.data.link);

				message.channel.send({embed: {
				    color: 3447003,
				    author: {
				      name: bot.user.username,
				      icon_url: bot.user.avatarURL
				    },
				    title: "Titre d'un embed",
				    url: json.data.link,
				    description: "Petit test desc.",
				    image: {
				    	url : json.data.link
				    },
				    timestamp: new Date(),
				    footer: {
				      icon_url: bot.user.avatarURL,
				      text: "© Example"
				    }
				  }
				});

		    })
		    .catch(function (err) {
		        console.error(err.message);
		    });
		});




    }
})

bot.login(token)