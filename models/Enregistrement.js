let connection = require('../config/db');

class Enregistrement {

	static create (Identifiant, MotDePasse, cb){
		var post  = {usr_mail: Identifiant, usr_psw: MotDePasse};
		connection.query('INSERT INTO ndb_usr SET ?',post,function(err, result) {
             if (err){
           		console.log('Err Enregistrement : ', err);
             }else{
             	console.log('Result Enregistrement : ',result);
             } 
             cb();
         });
	}
}

module.exports = Enregistrement