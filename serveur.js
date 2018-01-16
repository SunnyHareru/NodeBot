var express = require('express');
var bodyParser = require('body-parser')


var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous etes a l\'accueil');
});

app.get('/Authentification', function(req, res) {
    res.render('Authentification.ejs');
});

app.post('/Authentification', function(req, res) {
  	if (req.body.Identifiant == undefined || req.body.Identifiant == ''){
		res.end("Vous n'avez pas mis d'identifiant");
	}
	else {
		let Authentification = require('./models/Authentification.js')
		Authentification.create(req.body.Identifiant,req.body.MotDePasse, function(cb) {
			if(cb.length > 0){
				 res.end("Vous etes bien authentifié");
	             console.log('success auth', "Authentification du compte");
			}
			else{
				res.end("Vous etes pas authentifié");
				console.log('err auth', "Authentification du compte");
			}
         });
	}
});

app.post('/Enregistrement', function(req, res) {
	if (req.body.Identifiant == undefined || req.body.Identifiant == ''){
		res.end("Vous n'avez pas mis d'identifiant");
	}
	else {
		let Enregistrement = require('./models/Enregistrement.js')
		Enregistrement.create(req.body.Identifiant,req.body.MotDePasse, function() {
			 res.end("Vous avez bien creer un utilisateur");
             console.log('success saves', "Enregistrement du compte");       
         });
	}
});

app.listen(8080);