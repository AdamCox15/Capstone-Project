const tattoos = require('./db.json');

//Get, Post, Delete, Push

module.exports = {
    getTattoo: (req, res) => {
    res.status(200).send(tattoos)
    },
    addToList: (req, res) => {
        const {name} = req.body;
        let tattooList = {
            name: name
        }
        res.status(200).send()
    }

}