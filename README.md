

# NodeBot

Barbero bastien et Rodrigues kévin débutants dans nodeJs.

## 1 - Authentification

    Premier projet permettant d’écrire dans une base de données Mysql, 
    et de tester si le login et Mot de passe existe.

> Installation

Mettre en place un base donnée Mysql :

**nodebot.sql** --> Sql créant la table nécessaire au projet

> Paramètre

Renseigner les paramètres de connexion à la base de donnée dans un fichier data.json a la racine du projet avec la structure suivante :

```json
{
    "host" : 		"",
    "user" : 		"",
    "password" : 	"",
    "database" : 	""
}
```
> Lancement

- Installer les modules : **-npm install**
- Lancer **serveur.js** (le serveur se lance sur le port 8080)
- Aller sur la page **/Authentification** pour voir les formulaires de
   connexion
   
## 2 - Bot Discord

	Deuxième projet qui est un bot discord, le projet et de récupérer  
	les statistiques d'un joueur a travers d'une api pour créer une image 
	l'upload sur imgur et la renvoyer sur le discord pour que l'utilisateur 
	puisse la récupérer a n'importe quel moment

> Installation

 - Bot discord :
	  - da
 - Compte Imgur :
	 -  Création  du compte [Imgur](https://imgur.com/register?redirect=https://imgur.com/)
	 -  Enregistrer l'application [enregistrement](https://api.imgur.com/oauth2/addclient)
	 -  Dans Authorization callback URL mettre : *`https://www.getpostman.com/oauth2/callback`*
	 - Récupérer bien le Client ID	

> Paramètre

Renseigner les paramètres de connexion au bot dans un fichier token.json a la racine du projet avec la structure suivante :

```json
{
    "token" : 		"VotreToken"
}
```
Renseigner aussi les paramètres du compte imgur dans un fichier imgur.json a la racine du projet avec la structure suivante :

```json
{
    "mail" : 		"example@gmail.com",
    "password" : 	"1234",
    "ClientID" : 	"exampleClientID"
} 
```

> Lancement

- Installer les modules : **-npm install**
- Lancer **index.js** 
- Aller sur le discord ....
