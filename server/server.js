const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors")
const Constants = require('./Constants');
var http = require('http');

const httpServer = http.createServer(app);

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/

app.get('/test', (req, res) => {
    res.send("Bob");
})

httpServer.listen(Constants.PORT, () => {
    console.log('Server listening on port: ', Constants.PORT)
}) 