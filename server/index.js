const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getTattoo,
    addToList

} = require('./controller')

app.get('/getTattoo', getTattoo)
app.post('./addToList', addToList)

app.listen(4567, () => {
    console.log('Listening on port 4567!')
})