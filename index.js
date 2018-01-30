const Discord = require('discord.js')
const webshot = require('webshot');
const imgur   = require('imgur');
 
const bot = new Discord.Client()

const { token } = require("./token.json");

imgur.setClientId('6119dcf32dc3b9d');
imgur.setCredentials('bastienbarbero@gmail.com', 'bastienkevin1', '6119dcf32dc3b9d');


webshot('https://imgur.com/eJtTdAS.png', 'google.png', function(err) {
  console.log("Hey");
});

bot.on('ready', function (){
    bot.user.setActivity('Diablo III').catch(console.error)
})

bot.on('message', function(message){
    if (message.content === 'Just do it'){
        message.reply('Dont let your dreams be dreams !')
    }
    if (message.content === 'i'){



		// // A single image 
		// imgur.uploadFile('tut2.png')
		//     .then(function (json) {
		//         console.log(json.data.link);
		//     })
		//     .catch(function (err) {
		//         console.error(err.message);
		//     });




		// message.channel.send({embed: {
		//     color: 3447003,
		//     author: {
		//       name: bot.user.username,
		//       icon_url: bot.user.avatarURL
		//     },
		//     title: "Titre d'un embed",
		//     url: "http://google.com",
		//     description: "Petit test desc.",
		//     image: {
		//     	url : "https://www.w3schools.com/howto/img_fjords.jpg"
		//     },
		//     timestamp: new Date(),
		//     footer: {
		//       icon_url: bot.user.avatarURL,
		//       text: "© Example"
		//     }
		//   }
		// });
    }
})

bot.login(token)

//Client ID:
//6119dcf32dc3b9d

//Client secret:
//51cd3618f40a007609dee1246cd1ab05cd082dc6

