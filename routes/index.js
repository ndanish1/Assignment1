var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var missionStatement = "I love learning programming.";
    res.render('index', { title: 'Home', missionStatement: missionStatement });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  var missionStatement = "I love learning programming.";
  res.render('index', { title: 'Home', missionStatement: missionStatement });  
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;
