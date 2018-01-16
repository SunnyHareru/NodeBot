var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous etes a l\'accueil');
});

app.get('/Authentification', function(req, res) {
    res.render('Authentification.ejs');
});

app.post('/Authentification', function(req, res) {
  	if (req.body.Identifiant == undefined || req.body.Identifiant == ''){
		res.write(
			'<!DOCTYPE html>'+
			'<html> <head> <meta charset="utf-8" /> </head>'+ 
			'    <body>'+
			' 	 <p>Vous n\'avez pas mis d\'identifiant<p>'+
			'	 <a href="/Authentification">'+
			'     	<input type="button" value="Retour" onclick="">'+
			'	 </a>'+
			'    </body>'+
			'</html>');
		res.end();  
	}
	else {
		let Authentification = require('./models/Authentification.js')
		Authentification.create(req.body.Identifiant,req.body.MotDePasse, function(cb) {1
			res.writeHead(200, {"Content-Type": "text/html"});
			if(cb.length > 0){
				//res.end("Vous etes bien authentifié")
	            console.log('success auth', "Authentification du compte");
				res.write(
					'<!DOCTYPE html>'+
					'<html> <head> <meta charset="utf-8" /> </head>'+ 
					'    <body>'+
					' 	 <p>Vous etes bien authentifié<p>'+
					'	 <a href="/">'+
					'     	<input type="button" value="Ok" onclick="">'+
					'	 </a>'+
					'    </body>'+
					'</html>');
				res.end();

			}
			else{
				console.log('err auth', "Authentification du compte");
				res.write(
					'<!DOCTYPE html>'+
					'<html> <head> <meta charset="utf-8" /> </head>'+ 
					'    <body>'+
					' 	 <p>Vous n\'etes pas bien authentifié<p>'+
					'	 <a href="/Authentification">'+
					'     	<input type="button" value="Ok" onclick="">'+
					'	 </a>'+
					'    </body>'+
					'</html>');
				res.end();
			}
         });
	}
});

app.post('/Enregistrement', function(req, res) {
	if (req.body.Identifiant == undefined || req.body.Identifiant == ''){
		res.write(
			'<!DOCTYPE html>'+
			'<html> <head> <meta charset="utf-8" /> </head>'+ 
			'    <body>'+
			' 	 <p>Vous n\'avez pas mis d\'identifiant<p>'+
			'	 <a href="/Authentification">'+
			'     	<input type="button" value="Retour" onclick="">'+
			'	 </a>'+
			'    </body>'+
			'</html>');
		res.end();   
	}
	else {
		let Enregistrement = require('./models/Enregistrement.js')
		Enregistrement.create(req.body.Identifiant,req.body.MotDePasse, function() {
             console.log('success saves', "Enregistrement du compte");
				res.write(
					'<!DOCTYPE html>'+
					'<html> <head> <meta charset="utf-8" /> </head>'+ 
					'    <body>'+
					' 	 <p>Enregistrement du compte<p>'+
					'	 <a href="/Authentification">'+
					'     	<input type="button" value="Ok" onclick="">'+
					'	 </a>'+
					'    </body>'+
					'</html>');
				res.end();     
         });
	}
});

app.listen(8080);