// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            console.log("orm burger: " + JSON.stringify(result));
            cb(result);
        });
    },
// The variables cols and vals are arrays.
    createOne: function(cols, vals, cb) {
        orm.createOne("burgers", cols, vals, function(result) {
            console.log("orm new burger: " + JSON.stringify(result));
            cb(result);
        });
    },

    updateOne: function(colVals, condition, cb) {
        orm.updateOne("burgers", colVals, condition, function(result) {
            console.log("orm update burger: " + JSON.stringify(result));
            cb(result);
        });
    }
};
// Export the database functions for the controller
module.exports = burger;