let connection = require('../config/db');

class Authentification {

	static create (Identifiant, MotDePasse, cb){
        connection.query('SELECT * FROM ndb_usr WHERE usr_mail = ? And usr_psw = ?',[Identifiant,MotDePasse], function (err, result) {
             if (err){
           		console.log('Err Authentification : ', err);
             }else{
             	console.log('Result Authentification : ',result);
             } 
             cb(result);
         });
	}
}

module.exports = Authentification