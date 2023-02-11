const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors")
const Constants = require('./Constants');
const dotenv = require('dotenv');
var bodyParser = require("body-parser");
const axios = require("axios");
const getAmazon = require("./selenium");


let ebayRes;

var http = require('http');
const { json } = require("express/lib/response");
const c = require("colour");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(bodyParser.json());


const httpServer = http.createServer(app);

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/test', (req, res) => {
    let tmp = {test: "Bob"}
    console.log('req')
    res.send(JSON.stringify(tmp));
})

/*
    req.body: {
        url: url of product on amazon
        country: country to look for products in
    }
*/
app.post('/setebay', (req, res) => {
    console.log(req.body)

    getAmazon(req.body.url).then((name, price) => {
        const options = {
            method: 'GET',
            url: 'https://ebay-data-scraper.p.rapidapi.com/products',
            params: {page_number: '1', product_name: name, country: req.body.country},
            headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'ebay-data-scraper.p.rapidapi.com'
            }
        };
        
        axios.request(options).then( (response) => {
            console.log(response.data)
            ebayRes = response.data
            ebayRes.amazonPrice = price
            res.send('success')
        }).catch((error) => {
            console.error(error)
        })
        })
})

app.get('/getebay', (req, res) => {
    if(ebayRes){
        console.log('res')
        console.log(ebayRes)
        res.send(JSON.stringify(ebayRes))
    }
    else {
        console.log('polling')
        res.send(JSON.stringify({body: 'not loaded'}))
    }
})

httpServer.listen(Constants.PORT, () => {
    console.log('Server listening on port: ', Constants.PORT)
}) 