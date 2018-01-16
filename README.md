

# NodeBot

Barbero bastien et Rodrigues kévin débutants dans nodeJs.

## Authentification

    Premier projet permettant d’écrire dans une base de donnée Mysql, 
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
- Lancer **serveur.js** ( le serveur se lance sur le port 8080)
- Aller sur la page **/Authentification** pour voir les formulaires de
   connexion
