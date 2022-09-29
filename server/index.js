const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getTattoo,
    addToList
    // deleteTattoo

} = require('./controller')

app.get('/getTattoo', getTattoo)
app.post('/addToList', addToList)
// app.delete('/deleteTattoo/:id', deleteTattoo)

app.listen(4567, () => {
    console.log('Listening on port 4567!')
})