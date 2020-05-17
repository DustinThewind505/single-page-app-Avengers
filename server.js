const express = require('express');

const PORT = 420;

const server = express();

const colors = [
    {
        "color": "black"
    },
    {
        "color": "blue"
    },
    {
        "color": "red"
    },
    {
        "color": "white"
    },
    {
        "color": "silver"
    },
    {
        "color": "salmon"
    },
    {
        "color": "ruby"
    }
];

server.get('/', (req, res, next) => {
    res.status(200).send('I love Toasty!');
})

server.get('/colors', (req, res) => {
    res.status(200).json(colors)
})

server.listen(PORT, () => {
    console.log(`\n*** Server is running on localhost/${PORT} ***\n`)
});