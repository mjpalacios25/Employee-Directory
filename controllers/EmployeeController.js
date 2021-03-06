const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Employee
        .find(req.query)
        .sort({name: 1})
        .then(dbEmployee => res.json(dbEmployee))
        .catch(err => res.status(422).json(err))
    },
    sortbyDept: function(req, res) {
        db.Employee
        .find(req.query)
        .sort({department: 1})
        .then(dbEmployee => res.json(dbEmployee))
        .catch(err => res.status(422).json(err))
    },
    findbyID: function(req, res){
        db.Employee
        .findById(req.params.id)
        .then(dbEmployee => res.json(dbEmployee))
        .catch(err => res.status(422).json(err))
    },
    create: function(req, res){
        db.Employee
        .create(req.body)
        .then(dbEmployee => res.json(dbEmployee))
        .catch(err => res.status(422).json(err))
    },
    remove: function (req, res) {
        db.Employee
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};