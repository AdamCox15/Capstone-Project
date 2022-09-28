const drinks = require('./db.json');

//Get, Post, Delete, Push

module.exports = {
    getDrinks: (req, res) => {
    res.status(200).send(drinks)
    }
}