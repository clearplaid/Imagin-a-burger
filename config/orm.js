var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
//need to complete query string parameters 
        console.log(queryString);

        connection.query(queryString, function(err, result){
            if (err) throw err;

            console.log(result);
            cb(result);
        })
    },

    createOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
//need to complete query string parameters 
        console.log(queryString);

        connection.query(queryString, function(err, result){
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function(table, colVals, condition, cb) {
        var queryString = "UPDATE " + table;
//need to complete query string parameters 
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;