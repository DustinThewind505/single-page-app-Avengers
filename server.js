const http = require('http');

const PORT = 420;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain');
    res.end("I love Toasty");
})

server.listen(PORT, () => {
    console.log(`\n*** Server is running on localhost/${PORT} ***\n`)
});