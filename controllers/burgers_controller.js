var express = require("express");

var router = express.Router();

// import the model (burger.js) to use its db functions
var burger = require("../models/burger.js");

// routes and logic within those routes where required
router.get("/", function(req, res) {
    
    console.log("Req: " + JSON.stringify(req.params));
   
    burger.selectAll(function(data) {
        console.log("data: " + JSON.stringify(data));
        var handleBarsObj = {
            burger: data
        };
        
        console.log("router hb object: " + JSON.stringify(handleBarsObj));
        
        res.render("index", handleBarsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.createOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        console.log("router Create Result: " + JSON.stringify(result));

        res.json({ burger_id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log("router params: " + JSON.stringify(req.params));
    var condition = "burger_id = " + req.params.id;

    console.log("router condition: " + condition);

    burger.updateOne({
        devoured: req.body.devoured
    },
    condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        }
        res.status(200).end();
        }
    );
});

// Export routes for server.js to use.
module.exports = router;