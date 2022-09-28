const tattoos = require('./db.json');

//Get, Post, Delete, Push

module.exports = {
    getTattoo: (req, res) => {
    res.status(200).send(tattoos)
    }
}