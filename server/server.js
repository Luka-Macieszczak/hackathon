const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors")
const Constants = require('./Constants');
var bodyParser = require("body-parser");

var http = require('http');
const { json } = require("express/lib/response");

app.use(bodyParser.json());


const httpServer = http.createServer(app);

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/

app.get('/test', (req, res) => {
    let tmp = {test: "Bob"}
    console.log('req')
    res.send(JSON.stringify(tmp));
})

httpServer.listen(Constants.PORT, () => {
    console.log('Server listening on port: ', Constants.PORT)
}) 