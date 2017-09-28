var express = require('express');
var router = express.Router();

// Require the event mongoose schema
var Eventer = require('../model/event');

// Fetch data from mongo
router.get('/', function(req, res){
    Eventer.find()
        .exec(function(err, events) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            console.log(events);
            res.status(200).json({
                message: 'Success',
                obj: events
            });
        });
});

module.exports = router;
