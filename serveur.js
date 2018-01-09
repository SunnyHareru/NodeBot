var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser')



/// Connection MySql
var client= mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodebot',
});

client.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... ");    
	} else {
	    console.log("Error connecting database ... ");    
	}
});



var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
});


app.get('/Authentification', function(req, res) {
    res.render('Authentification.ejs');
});

app.post('/FenetreConnexion', function(req, res) {
	var identifiant = req.body.Identifiant,
        motDePasse = req.body.MotDePasse;
	res.end('Vous etes apres la validation : '+identifiant);
});

app.listen(8080);