let  mysql = require('mysql');
const { host, user, password, database } = require("../data.json");

/// Connection MySql
let connection = mysql.createConnection({
  host,
  user,
  password,
  database,
});


connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... ");    
	} else {
	    console.log("Error connecting database ... ");    
	}
});

module.exports = connection