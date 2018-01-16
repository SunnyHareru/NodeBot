let  mysql = require('mysql');

/// Connection MySql
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodebot',
});


connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... ");    
	} else {
	    console.log("Error connecting database ... ");    
	}
});

module.exports = connection