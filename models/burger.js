//import orm.js
var orm = require("../config/orm.js");

//call the ORM functions using burger specific input 
var burger = {
    all: function(callback) {
        //calling orm.selectAll, and inserting burgers as the table input 
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    // update function, calling updateOne function  

    update: function(id, callback) {
        var condition = "id=" + id;
        //changing the condition to true, showing it has been devoured
        orm.updateOne("burgers", {
          devoured: true
        }, condition, callback);
      },

    create: function(column, value, callback) {
        orm.insertOne("burgers", column, value, callback, function(res) {
            callback(res);
        });
    }

};

//export
module.exports = burger;