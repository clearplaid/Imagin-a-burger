// MySQL connection
var mysql = require("mysql");

var connection = mysql.connection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});
// Make connection
connection.connect(function(err){
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;