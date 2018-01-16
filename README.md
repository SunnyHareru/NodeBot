--> Authentification

Debut dans le nodeJs, 

Page permettant d'ecrire dans une base de donnée Mysql, et de tester si le login et MotDePasse existe.

Pour le bon fonctionnement des pages, mettre en place un base donnée Mysql :
Le fichier pour creer le sql est dans le projet a la racine (nodebot.sql)
Une table : ndb_usr avec ->
`usr_pk` int(11) NOT NULL AUTO_INCREMENT,
`usr_mail` varchar(255) NOT NULL,
`usr_psw` varchar(255) NOT NULL,


Renseigner les paramettres de connexion à la base de donnée dans un fichier data.json a la racine du projet de tel structure :

{
    "host" : 		"",
    "user" : 		"",
    "password" : 	"",
    "database" : 	""
}

Aller sur la page /Authentification pour voir les formulaires de connection