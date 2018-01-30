const Discord = require('discord.js')
const webshot = require('webshot');
const imgur   = require('imgur');
 const path = require('path');

const bot = new Discord.Client()
const { token } = require("./token.json");


const { mail, password, ClientID } = require("./imgur.json");

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
    	var url = `file:///${path.join(__dirname, 'index.html')}`;
    	console.log(url);

    	webshot(url, 'stat.png' ,function(err) {

			imgur.uploadFile('stat.png').then(function (json) {
		         console.log(json.data.link);

				message.channel.send({embed: {
				    color: 3447003,
				    title: "Stat League Of Legend",
				    url: json.data.link,
				    image: {
				    	url : json.data.link
				    },
				    timestamp: new Date(),
				    footer: {
				      icon_url: bot.user.avatarURL,
				      text: "© Stat"
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
