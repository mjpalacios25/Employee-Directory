const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Employee
        .sort({name: -1})
        .then(dbEmployee => res.json(dbEmployee))
        .catch(err => res.status(422).json(err))
    },
    findbyID: function(req, res){
        db.Employee
        .findById(req.params.id)
        .then(dbEmployee => res.json(dbEmployee))
        .catch(err => res.status(422).json(err))
    },
    create: function(){
        db.Employee
        .create(req.body)
        .then(dbEmployee => res.json(dbEmployee))
        .catch(err => res.status(422).json(err))
    }
};