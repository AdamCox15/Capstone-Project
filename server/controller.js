const tattoos = require('./db.json');
let globalID = 9;

const myTattoos = [];



//Get, Post, Delete, Push



module.exports = {
    getTattoo: (req, res) => {
    res.status(200).send(tattoos)
    },
    addToList: (req, res) => {
        const {name, picture} = req.body;
        let newTatt = {
            id: globalID,
            name,
            picture
        }
        console.log(newTatt)
        tattoos.push(newTatt);
        globalID++;
        res.status(200).send(tattoos);
        
    }
    // deleteTattoo: (req, res) => {
    //     const index = tattoos.findIndex(el => el.id === +req.params.id)
    //     tattoos.splice(index, 1)
    //     res.status(200).send(tattoos)
    // }

}