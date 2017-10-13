var express = require('express');
var router = express.Router();

// Require the event mongoose schema
var Courses = require('../model/course');

// Fetch data from mongo
router.get('/', function(req, res){
    Courses.find()
        .exec(function(err, courses) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            console.log(courses);
            res.status(200).json({
                message: 'Success',
                obj: courses
            });
        });
});

module.exports = router;
