//import express
var express = require("express");
//import burger.js
var burger = require("../models/burger")
//create the router 
var router = express.Router();

//get, put, post
//request data 
router.get("/", function (req, res) {
    burger.all(function (data) {

        res.render("index", { burgers: data });
    });
});

//method to send data to server to updae/create, show the update of the burger from the list to devoured

router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.json(result);
    });
});

//method to send data to the server storedin the req.body, to update/create
router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name"
    ], [
            req.body.name
        ], function (result) {
            //send back the id of the new burger
            res.json({ id: result.insertId });
        });
});

//export 
module.exports = router;