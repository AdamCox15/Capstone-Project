const tattoos = require('./db.json');

const myTattoos = [];



//Get, Post, Delete, Push



module.exports = {
    getTattoo: (req, res) => {
    res.status(200).send(tattoos)
    },
    addToList: (req, res) => {
        // const {name} = req.body;
        myTattoos.push(req.body)
        res.status(200).send(myTattoos)
    }
    // deleteTattoo: (req, res) => {
    //     const index = tattoos.findIndex(el => el.id === +req.params.id)
    //     tattoos.splice(index, 1)
    //     res.status(200).send(tattoos)
    // }

}