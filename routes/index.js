var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Products' });
});

/* GET home page. */
router.get('/realtimeproducts', function(req, res, next) {
  res.render('realtimeproducts', { title: 'Real Time Products' });
});

module.exports = router;
