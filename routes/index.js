var express = require('express');
var router = express.Router();
var fs = require('fs');
var writeStream = fs.createWriteStream("./database/database.txt");

router.post('/', function (req, res, next) {
    const data = {
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone:req.body.phone,
        email: req.body.email,
        checkbox: req.body.checkbox,
    }
    try {
        writeStream.write(JSON.stringify([data]));
        writeStream.end();
        res.send('Saved');
    } catch (error) {
        return console.log(error);
    }
});

module.exports = router;
