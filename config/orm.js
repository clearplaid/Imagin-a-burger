var connection = require("./connection.js");

// Helper function for mySQL syntax
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  };

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        arr.push(key + "=" + value);
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  };


// Object for all our mySQL statement functions
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
//need to complete query string parameters 
        console.log("query: " + queryString);

        connection.query(queryString, function(err, result){
            if (err) throw err;

            console.table(result);
            cb(result);
        })
    },

    createOne: function(table, cols, vals, cb) {
        console.log("Table: " + table);
        console.log("cols: " + cols);
        console.log("vals: " + vals);

        var queryString = "INSERT INTO " + table;
            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES ("
            queryString += printQuestionMarks(vals.length);
            queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function(table, colVals, condition, cb) {
        console.log("Table: " + table);
        console.log("colVals: " + JSON.stringify(colVals));
        console.log("vals: " + condition);

        var queryString = "UPDATE " + table;
            queryString += " SET ";
            queryString += objToSql(colVals);
            queryString += " WHERE ";
            queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;