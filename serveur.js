var express = require('express');
var bodyParser = require('body-parser')



var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous etes à l\'accueil');
});

app.get('/Authentification', function(req, res) {
    res.render('Authentification.ejs');
  	if (req.body.Identifiant == undefined || req.body.Identifiant == ''){
		res.end("Vous n'avez pas mis d'identifiant");
	}
	else {
		let Authentification = require('./models/Authentification.js')
		Enregistrement.create(req.body.Identifiant,req.body.MotDePasse, function() {
			 res.end("Vous etes bien authentifié");
             console.log('success saves', "Authentification du compte");       
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

//post creation de donnée
//put modification
//get récuperation
//delete supresseion